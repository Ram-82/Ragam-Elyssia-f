import { useEffect, useState } from "react";
import { Link } from "wouter";
import { API_BASE_URL } from "@/lib/queryClient";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function DashboardHistory() {
  const [consultations, setConsultations] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        const [consultRes, contactRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/my/consultations`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${API_BASE_URL}/api/my/contacts`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        const consultData = await consultRes.json();
        const contactData = await contactRes.json();
        if (!consultData.success || !contactData.success) {
          setError("Failed to load history.");
        } else {
          setConsultations(consultData.consultations);
          setContacts(contactData.contacts);
        }
      } catch (err) {
        setError("Failed to load history.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const activities = [
    ...consultations.map((c) => ({
      type: "Consultation",
      title: c.eventType || "Consultation",
      status: c.status,
      time: c.createdAt,
      id: c.id,
    })),
    ...contacts.map((c) => ({
      type: "Contact",
      title: c.subject || "Contact Inquiry",
      status: c.status,
      time: c.createdAt,
      id: c.id,
    })),
  ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-ivory px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <Link href="/dashboard" className="text-gold underline text-sm mb-6 inline-block">&larr; Back to Dashboard</Link>
          <h1 className="font-playfair text-3xl font-bold text-charcoal mb-8">Your Complete Activity History</h1>
          {loading ? (
            <div className="text-center py-8 text-warm-gray">Loading...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">{error}</div>
          ) : activities.length === 0 ? (
            <div className="text-center py-8 text-warm-gray">No activity found.</div>
          ) : (
            <div className="space-y-4">
              {activities.map((a, idx) => (
                <Card key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-gold/10 rounded-xl shadow">
                  <div>
                    <div className="font-semibold text-charcoal">{a.type}: {a.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">Status: {a.status}</div>
                    <div className="text-xs text-muted-foreground">{new Date(a.time).toLocaleString()}</div>
                  </div>
                  <Link href={a.type === 'Consultation' ? `/dashboard/consultation/${a.id}` : `/dashboard/contact/${a.id}`} className="text-gold underline text-xs font-semibold hover:text-gold-dark">View</Link>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
} 