import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "wouter";
import { API_BASE_URL } from "@/lib/queryClient";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useToast } from "@/hooks/use-toast";

const editableStatuses = ["new"];

export default function ContactDetail() {
  const { id } = useParams<{ id: string }>();
  const [contact, setContact] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  useEffect(() => {
    async function fetchContact() {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_BASE_URL}/api/my/contacts`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) {
          const found = data.contacts.find((c: any) => String(c.id) === id);
          setContact(found);
          setEditForm(found);
        } else {
          setError("Contact inquiry not found.");
        }
      } catch {
        setError("Failed to load contact inquiry.");
      } finally {
        setLoading(false);
      }
    }
    fetchContact();
  }, [id]);

  const isEditable = contact && editableStatuses.includes(contact.status);

  const handleChange = (field: string, value: string) => {
    setEditForm((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/api/my/contacts/${contact.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          subject: editForm.subject,
          message: editForm.message,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setContact(data.contact);
        setEditForm(data.contact);
        toast({ title: "Contact updated", description: "Your changes have been saved." });
      } else {
        toast({ title: "Error", description: data.message || "Failed to update.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error.", variant: "destructive" });
    }
    setSaving(false);
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-ivory px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <Link href="/dashboard" className="text-gold underline text-sm mb-6 inline-block">&larr; Back to Dashboard</Link>
          <h1 className="font-playfair text-3xl font-bold text-charcoal mb-10 text-center mt-8">Contact Inquiry Details</h1>
          {loading ? (
            <div className="text-center py-8 text-warm-gray">Loading...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">{error}</div>
          ) : !contact ? (
            <div className="text-center py-8 text-warm-gray">Contact inquiry not found.</div>
          ) : (
            <Card className="p-8 bg-white border border-gold/10 rounded-2xl shadow-xl max-w-2xl mx-auto mt-6">
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Subject:</label>
                    {isEditable ? (
                      <input type="text" className="border rounded px-2 py-2 w-full bg-white focus:ring-2 focus:ring-gold" value={editForm.subject} onChange={e => handleChange('subject', e.target.value)} />
                    ) : (
                      <span className="font-normal">{contact.subject}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="font-semibold">Message:</label>
                    {isEditable ? (
                      <textarea className="border rounded px-2 py-2 w-full bg-white focus:ring-2 focus:ring-gold" value={editForm.message || ''} onChange={e => handleChange('message', e.target.value)} />
                    ) : (
                      <span className="font-normal">{contact.message}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Status:</label>
                    <span className="font-normal">{contact.status}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                  <div><span className="font-semibold">Name:</span> <span className="ml-2 font-normal">{contact.name}</span></div>
                  <div><span className="font-semibold">Email:</span> <span className="ml-2 font-normal">{contact.email}</span></div>
                  <div><span className="font-semibold">Created At:</span> <span className="ml-2 font-normal">{new Date(contact.createdAt).toLocaleString()}</span></div>
                </div>
                {isEditable && (
                  <button
                    className="mt-4 bg-gold text-charcoal px-6 py-2 rounded-lg font-semibold shadow hover:bg-gold/90 transition disabled:opacity-60"
                    onClick={e => { e.preventDefault(); handleSave(); }}
                    disabled={saving}
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                )}
              </form>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
} 