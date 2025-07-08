import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { API_BASE_URL } from "@/lib/queryClient";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const EVENT_TYPE_OPTIONS = [
  { value: "private-event", label: "Private Event" },
  { value: "fashion-brand", label: "Fashion & Brand Activation" },
  { value: "concierge", label: "Concierge Experience" },
  { value: "destination", label: "Destination Planning" },
  { value: "other", label: "Other" },
];
const BUDGET_OPTIONS = [
  { value: "5-10L", label: "₹5-10 Lakhs" },
  { value: "10-25L", label: "₹10-25 Lakhs" },
  { value: "25-50L", label: "₹25-50 Lakhs" },
  { value: "50L+", label: "₹50 Lakhs+" },
  { value: "discuss", label: "Discuss Personally" },
];
const editableStatuses = ["new", "pending", "active"];

export default function ConsultationDetail() {
  const { id } = useParams<{ id: string }>();
  const [consultation, setConsultation] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchConsultation() {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_BASE_URL}/api/my/consultations`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) {
          const found = data.consultations.find((c: any) => String(c.id) === id);
          setConsultation(found);
          setEditForm(found);
        } else {
          setError("Consultation not found.");
        }
      } catch {
        setError("Failed to load consultation.");
      } finally {
        setLoading(false);
      }
    }
    fetchConsultation();
  }, [id]);

  const isEditable = consultation && editableStatuses.includes(consultation.status);

  const handleChange = (field: string, value: string) => {
    setEditForm((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/api/my/consultations/${consultation.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          eventType: editForm.eventType,
          eventDate: editForm.eventDate,
          location: editForm.location,
          budget: editForm.budget,
          details: editForm.details,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setConsultation(data.consultation);
        setEditForm(data.consultation);
        toast({ title: "Consultation updated", description: "Your changes have been saved." });
      } else {
        toast({ title: "Error", description: data.message || "Failed to update.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error.", variant: "destructive" });
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this consultation?")) {
      return;
    }
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/api/my/consultations/${consultation.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({ title: "Consultation deleted", description: "Your consultation has been deleted." });
        window.location.href = "/dashboard";
      } else {
        toast({ title: "Error", description: data.message || "Failed to delete.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network error.", variant: "destructive" });
    }
    setSaving(false);
  };

  const statusBadge = (status: string) => {
    let color = "bg-yellow-100 text-yellow-800";
    if (status === "completed") color = "bg-blue-100 text-blue-800";
    if (status === "rejected") color = "bg-red-100 text-red-800";
    if (status === "active") color = "bg-green-100 text-green-800";
    return <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${color}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>;
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-ivory px-4 py-10">
        <div className="max-w-2xl mx-auto">
          <Link href="/dashboard" className="text-gold underline text-sm mb-6 inline-block">&larr; Back to Dashboard</Link>
          <h1 className="font-playfair text-3xl font-bold text-charcoal mb-10 text-center mt-8">Consultation Details</h1>
          {loading ? (
            <div className="text-center py-8 text-warm-gray">Loading...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">{error}</div>
          ) : !consultation ? (
            <div className="text-center py-8 text-warm-gray">Consultation not found.</div>
          ) : (
            <Card className="p-8 bg-white border border-gold/10 rounded-2xl shadow-xl max-w-2xl mx-auto mt-6">
              <form className="space-y-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-lg font-semibold flex items-center gap-2">Event Type: {isEditable ? (
                    <Select value={editForm.eventType} onValueChange={v => handleChange('eventType', v)}>
                      <SelectTrigger className="border-charcoal text-charcoal w-48">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent className="z-[1000] bg-white border border-gold/30 shadow-luxury-lg">
                        {EVENT_TYPE_OPTIONS.map(opt => (
                          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <span className="ml-2 font-normal">{EVENT_TYPE_OPTIONS.find(opt => opt.value === consultation.eventType)?.label || consultation.eventType}</span>
                  )}
                  </div>
                  {statusBadge(consultation.status)}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Event Date:</label>
                    {isEditable ? (
                      <input type="date" className="border rounded px-2 py-2 w-full bg-white focus:ring-2 focus:ring-gold" value={editForm.eventDate} onChange={e => handleChange('eventDate', e.target.value)} />
                    ) : (
                      <span className="font-normal">{consultation.eventDate}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Location:</label>
                    {isEditable ? (
                      <input type="text" className="border rounded px-2 py-2 w-full bg-white focus:ring-2 focus:ring-gold" value={editForm.location} onChange={e => handleChange('location', e.target.value)} />
                    ) : (
                      <span className="font-normal">{consultation.location}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Budget:</label>
                    {isEditable ? (
                      <Select value={editForm.budget} onValueChange={v => handleChange('budget', v)}>
                        <SelectTrigger className="border-charcoal text-charcoal w-full">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="z-[1000] bg-white border border-gold/30 shadow-luxury-lg">
                          {BUDGET_OPTIONS.map(opt => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <span className="font-normal">{BUDGET_OPTIONS.find(opt => opt.value === consultation.budget)?.label || consultation.budget}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Status:</label>
                    <span className="font-normal">{consultation.status}</span>
                  </div>
                  <div className="sm:col-span-2 flex flex-col gap-2">
                    <label className="font-semibold">Details:</label>
                    {isEditable ? (
                      <textarea className="border rounded px-2 py-2 w-full bg-white focus:ring-2 focus:ring-gold" value={editForm.details || ''} onChange={e => handleChange('details', e.target.value)} />
                    ) : (
                      <span className="font-normal">{consultation.details || '-'}</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                  <div><span className="font-semibold">Name:</span> <span className="ml-2 font-normal">{consultation.name}</span></div>
                  <div><span className="font-semibold">Email:</span> <span className="ml-2 font-normal">{consultation.email}</span></div>
                  <div><span className="font-semibold">Phone:</span> <span className="ml-2 font-normal">{consultation.phone}</span></div>
                  <div><span className="font-semibold">Created At:</span> <span className="ml-2 font-normal">{new Date(consultation.createdAt).toLocaleString()}</span></div>
                </div>
                {isEditable && (
                  <div className="flex gap-4 mt-4">
                    <button
                      className="bg-gold text-charcoal px-6 py-2 rounded-lg font-semibold shadow hover:bg-gold/90 transition disabled:opacity-60"
                      onClick={e => { e.preventDefault(); handleSave(); }}
                      disabled={saving}
                    >
                      {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-red-600 transition"
                      onClick={e => { e.preventDefault(); handleDelete(); }}
                      disabled={saving}
                    >
                      Delete
                    </button>
                  </div>
                )}
                {!isEditable && (
                  <button
                    className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-red-600 transition"
                    onClick={e => { e.preventDefault(); handleDelete(); }}
                  >
                    Delete
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
