import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, Crown, Star } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { API_BASE_URL } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import SwipeToDelete from "@/components/SwipeToDelete";
import ReactDOM from "react-dom";

// Add a helper to merge and sort activities
interface ConsultationActivity {
  type: 'Consultation';
  title: string;
  description: string;
  time: string;
  id: number;
}
interface ContactActivity {
  type: 'Contact';
  title: string;
  description: string;
  time: string;
  id: number;
}
function getRecentActivities(consultations: any[], contacts: any[]): (ConsultationActivity | ContactActivity)[] {
  const consultActs: ConsultationActivity[] = consultations.map((c: any) => ({
    type: 'Consultation',
    title: c.eventType || 'Consultation',
    description: `Consulted: ${c.eventType || 'Consultation'}`,
    time: c.createdAt,
    id: c.id,
  }));
  const contactActs: ContactActivity[] = contacts.map((c: any) => ({
    type: 'Contact',
    title: c.subject || 'Contact Inquiry',
    description: `Contacted: ${c.subject || 'Contact Inquiry'}`,
    time: c.createdAt,
    id: c.id,
  }));
  return [...consultActs, ...contactActs].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()).slice(0, 3);
}

export default function Dashboard() {
  // Use user from context
  const { user, loading: userLoading } = useUser() as { user: any, loading: boolean };
  const { toast } = useToast();

  const savedExperiences = [
    {
      title: "Private Jet & Royal Suite",
      description: "Mumbai to Bangalore via private jet, luxury transfer, and Taj Presidential Suite",
      location: "Mumbai - Bangalore",
    },
    {
      title: "Goan Yacht Experience",
      description: "Luxury yacht charter with Hermès gifting experience",
      location: "Goa Coast",
    },
  ];

  // State for user data
  const [consultations, setConsultations] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Add state for delete confirmation dialog
  const [deleteDialog, setDeleteDialog] = useState<{ type: 'consultation' | 'contact', id: number } | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Add pagination state
  const [consultPage, setConsultPage] = useState(1);
  const [contactPage, setContactPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Paginated data
  const paginatedConsultations = consultations.slice((consultPage - 1) * ITEMS_PER_PAGE, consultPage * ITEMS_PER_PAGE);
  const consultTotalPages = Math.ceil(consultations.length / ITEMS_PER_PAGE);
  const paginatedContacts = contacts.slice((contactPage - 1) * ITEMS_PER_PAGE, contactPage * ITEMS_PER_PAGE);
  const contactTotalPages = Math.ceil(contacts.length / ITEMS_PER_PAGE);

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
          setError("Failed to load dashboard data.");
        } else {
          setConsultations(consultData.consultations);
          setContacts(contactData.contacts);
        }
      } catch (err) {
        setError("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const recentActivities = getRecentActivities(consultations, contacts);

  // Add delete handlers
  const handleDeleteConsultation = (id: number) => {
    setDeleteDialog({ type: 'consultation', id });
  };
  const handleDeleteContact = (id: number) => {
    setDeleteDialog({ type: 'contact', id });
  };

  // Confirm delete action
  const confirmDelete = async () => {
    if (!deleteDialog) return;
    setDeleting(true);
    try {
      const token = localStorage.getItem("token");
      let res, data;
      if (deleteDialog.type === 'consultation') {
        res = await fetch(`${API_BASE_URL}/api/my/consultations/${deleteDialog.id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        data = await res.json();
        if (res.ok && data.success) {
          setConsultations((prev) => prev.filter((c) => c.id !== deleteDialog.id));
          toast({ title: "Consultation deleted", description: "Your consultation has been deleted." });
        } else {
          toast({ title: "Error", description: data.message || "Failed to delete.", variant: "destructive" });
        }
      } else {
        res = await fetch(`${API_BASE_URL}/api/my/contacts/${deleteDialog.id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        data = await res.json();
        if (res.ok && data.success) {
          setContacts((prev) => prev.filter((c) => c.id !== deleteDialog.id));
          toast({ title: "Contact request deleted", description: "Your contact request has been deleted." });
        } else {
          toast({ title: "Error", description: data.message || "Failed to delete.", variant: "destructive" });
        }
      }
    } catch {
      toast({ title: "Error", description: "Network error.", variant: "destructive" });
    } finally {
      setDeleting(false);
      setDeleteDialog(null);
    }
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 text-center">
        <Crown className="text-gold mx-auto h-12 w-12 mb-6" />
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-2 tracking-wide">
          Your Private Concierge
        </h1>
        <p className="font-inter text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Welcome to your exclusive dashboard, where luxury experiences await your command.
        </p>
        <p className="font-inter text-xs text-muted-foreground mt-4">
            {userLoading ? "Loading..." : user?.createdAt ? `Member since ${new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}` : ""}
        </p>
      </section>

      {/* Quick Access Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12">
        <Link href="/consultation" className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <CalendarDays className="text-gold mx-auto mb-2 h-8 w-8" />
          <h3 className="font-playfair font-semibold text-charcoal mb-1">Book Experience</h3>
          <p className="font-inter text-xs text-muted-foreground">Schedule a new luxury consultation</p>
        </Link>
        <Link href="/experiences" className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <Star className="text-gold mx-auto mb-2 h-8 w-8" />
          <h3 className="font-playfair font-semibold text-charcoal mb-1">Experiences</h3>
          <p className="font-inter text-xs text-muted-foreground">Explore curated journeys</p>
        </Link>
        <Link href="/partners" className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <Crown className="text-gold mx-auto mb-2 h-8 w-8" />
          <h3 className="font-playfair font-semibold text-charcoal mb-1">Partners</h3>
          <p className="font-inter text-xs text-muted-foreground">Elite luxury network</p>
        </Link>
        <Link href="/preferences" className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
          <Clock className="text-gold mx-auto mb-2 h-8 w-8" />
          <h3 className="font-playfair font-semibold text-charcoal mb-1">Preferences</h3>
          <p className="font-inter text-xs text-muted-foreground">Customize your experience</p>
        </Link>
      </section>

      {/* Saved Experiences and Recent Activity */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="bg-white border border-muted rounded-lg shadow-sm p-6">
          <h3 className="font-playfair font-semibold text-charcoal mb-4 flex items-center gap-2">
            <Star className="text-gold" /> Saved Experiences
          </h3>
          <div className="space-y-4">
            {savedExperiences.map((exp, idx) => (
              <div key={idx} className="border border-muted rounded-md p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-charcoal">{exp.title}</h4>
                  <p className="font-inter text-xs text-muted-foreground">{exp.description}</p>
                  <p className="font-inter text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {exp.location}
                  </p>
                </div>
                <Button variant="outline" size="icon" aria-label="Favorite">
                  <Star className="h-4 w-4 text-gold" />
                </Button>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-4 w-full">
            View All Saved Experiences
          </Button>
        </Card>

        <Card className="bg-white border border-muted rounded-lg shadow-sm p-6">
          <h3 className="font-playfair font-semibold text-charcoal mb-4 flex items-center gap-2">
            <Clock className="text-gold" /> Recent Activity
          </h3>
          <div className="space-y-4">
              {recentActivities.length === 0 ? (
                <div className="text-muted-foreground text-center">No recent activity.</div>
              ) : (
                recentActivities.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1">
                      {activity.type === 'Consultation' ? <Star className="text-gold" /> : <Crown className="text-gold" />}
                    </div>
                <div>
                  <h4 className="font-semibold text-charcoal">{activity.title}</h4>
                  <p className="font-inter text-xs text-muted-foreground">{activity.description}</p>
                      <p className="font-inter text-xs text-muted-foreground mt-1">{new Date(activity.time).toLocaleString()}</p>
                </div>
              </div>
                ))
              )}
          </div>
            <Link href="/dashboard/history" className="block mt-4 w-full text-center border border-gold rounded-lg py-2 font-semibold text-charcoal hover:bg-gold/10 transition">
            View Complete History
            </Link>
        </Card>
      </section>

        {/* User Consultations Table */}
        <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-12">
          <h2 className="font-playfair text-2xl font-bold text-charcoal mb-4">Your Consultations</h2>
          {loading ? (
            <div className="text-center py-8 text-warm-gray">Loading...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">{error}</div>
          ) : consultations.length === 0 ? (
            <div className="text-center py-8 text-warm-gray">No consultations found.</div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border-separate border-spacing-y-2">
                  <thead className="bg-cream/50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-base">Event Type</th>
                      <th className="px-4 py-3 text-left font-bold text-base">Event Date</th>
                      <th className="px-4 py-3 text-left font-bold text-base">Location</th>
                      <th className="px-4 py-3 text-left font-bold text-base">Budget</th>
                      <th className="px-4 py-3 text-left font-bold text-base">Status</th>
                      <th className="px-4 py-3 text-center font-bold text-base">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedConsultations.map((c) => (
                      <tr key={c.id} className="bg-white border border-gold/10 rounded-xl shadow hover:bg-gold/10 transition">
                        <td className="px-4 py-3 font-semibold">{c.eventType.replace(/\b\w/g, (l: string) => l.toUpperCase()).replace(/-/g, ' ')}</td>
                        <td className="px-4 py-3">{c.eventDate}</td>
                        <td className="px-4 py-3">{c.location}</td>
                        <td className="px-4 py-3">{c.budget}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                            c.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : c.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : c.status === "completed"
                              ? "bg-blue-100 text-blue-800"
                              : c.status === "rejected"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-4 py-3 flex gap-2 justify-center text-center">
                          <Link href={`/dashboard/consultation/${c.id}`} aria-label="View Consultation" className="text-gold underline text-xs hover:text-gold-dark px-2 py-1">View/Modify</Link>
                          <button
                            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                            aria-label="Delete Consultation"
                            onClick={() => handleDeleteConsultation(c.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination controls */}
              {consultTotalPages > 0 && (
                <div className="flex justify-center items-center gap-2 mt-4">
                  <button onClick={() => setConsultPage(p => Math.max(1, p - 1))} disabled={consultPage === 1} className="px-3 py-1 rounded border bg-cream text-charcoal disabled:opacity-50">Prev</button>
                  {Array.from({ length: consultTotalPages }, (_, i) => (
                    <button key={i} onClick={() => setConsultPage(i + 1)} className={`px-3 py-1 rounded border ${consultPage === i + 1 ? 'bg-gold text-white' : 'bg-cream text-charcoal'}`}>{i + 1}</button>
                  ))}
                  <button onClick={() => setConsultPage(p => Math.min(consultTotalPages, p + 1))} disabled={consultPage === consultTotalPages} className="px-3 py-1 rounded border bg-cream text-charcoal disabled:opacity-50">Next</button>
                </div>
              )}
            </>
          )}
        </section>

        {/* User Contact Requests Table */}
        <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-12">
          <h2 className="font-playfair text-2xl font-bold text-charcoal mb-4">Your Contact Requests</h2>
          {loading ? (
            <div className="text-center py-8 text-warm-gray">Loading...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">{error}</div>
          ) : contacts.length === 0 ? (
            <div className="text-center py-8 text-warm-gray">No contact requests found.</div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border-separate border-spacing-y-2">
                  <thead className="bg-cream/50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-base">Subject</th>
                      <th className="px-4 py-3 text-left font-bold text-base">Message</th>
                      <th className="px-4 py-3 text-left font-bold text-base">Status</th>
                      <th className="px-4 py-3 text-center font-bold text-base">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedContacts.map((c) => (
                      <tr key={c.id} className="bg-white border border-gold/10 rounded-xl shadow hover:bg-gold/10 transition">
                        <td className="px-4 py-3 font-semibold">{c.subject}</td>
                        <td className="px-4 py-3 max-w-xs truncate">{c.message}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                            c.status === "new"
                              ? "bg-yellow-100 text-yellow-800"
                              : c.status === "replied"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-4 py-3 flex gap-2 justify-center text-center">
                          <Link href={`/dashboard/contact/${c.id}`} aria-label="View Contact" className="text-gold underline text-xs hover:text-gold-dark px-2 py-1">View/Modify</Link>
                          <button
                            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                            aria-label="Delete Contact"
                            onClick={() => handleDeleteContact(c.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination controls */}
              {contactTotalPages > 0 && (
                <div className="flex justify-center items-center gap-2 mt-4">
                  <button onClick={() => setContactPage(p => Math.max(1, p - 1))} disabled={contactPage === 1} className="px-3 py-1 rounded border bg-cream text-charcoal disabled:opacity-50">Prev</button>
                  {Array.from({ length: contactTotalPages }, (_, i) => (
                    <button key={i} onClick={() => setContactPage(i + 1)} className={`px-3 py-1 rounded border ${contactPage === i + 1 ? 'bg-gold text-white' : 'bg-cream text-charcoal'}`}>{i + 1}</button>
                  ))}
                  <button onClick={() => setContactPage(p => Math.min(contactTotalPages, p + 1))} disabled={contactPage === contactTotalPages} className="px-3 py-1 rounded border bg-cream text-charcoal disabled:opacity-50">Next</button>
                </div>
              )}
            </>
          )}
      </section>

      {/* Personal Concierge Section */}
      {/* <section className="bg-charcoal text-ivory py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Crown className="text-gold mx-auto h-12 w-12 mb-6" />
          <h2 className="font-playfair text-3xl font-bold mb-4 tracking-wide">
            Personal Concierge Available 24/7
          </h2>
          <Button className="gold-gradient text-white px-6 py-3 mt-4">
            Connect with Your Concierge
          </Button>
        </div>
      </section> */}
      </main>
      <Footer />

      {/* Delete Confirmation Modal (Admin style) */}
      {deleteDialog && ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-2">
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 max-w-xs w-full border border-gold/20 flex flex-col items-center">
            <Crown className="h-10 w-10 text-gold mb-2" />
            <h2 className="font-playfair text-lg font-bold text-charcoal mb-2 text-center">
              Delete {deleteDialog.type === 'consultation' ? 'Consultation' : 'Contact Request'}?
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Are you sure you want to delete this {deleteDialog.type === 'consultation' ? 'consultation' : 'contact request'}? This action cannot be undone.
            </p>
            <div className="flex gap-4 w-full flex-col sm:flex-row">
              <button onClick={() => setDeleteDialog(null)} disabled={deleting} className="flex-1 py-2 rounded-lg border border-gold/20 bg-ivory text-charcoal font-semibold hover:bg-gold/10 transition mb-2 sm:mb-0">Cancel</button>
              <button onClick={confirmDelete} disabled={deleting} className="flex-1 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
    </div>
        </div>,
        document.body
      )}
    </>
  );
}
