import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'wouter';
import { Crown, Users, ClipboardList, LogOut, Search, User as UserIcon, Key, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { useUser } from '@/context/UserContext';
import { API_BASE_URL } from '@/lib/queryClient';

export default function AdminDashboard() {
  const { user } = useUser() as { user: any };
  const [adminToken, setAdminToken] = useState<string | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '', securityCode: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [consultations, setConsultations] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loadingTables, setLoadingTables] = useState(true);
  // Add state for editing rows
  const [consultEdit, setConsultEdit] = useState<{ [id: number]: { status: string; adminComment: string } }>({});
  const [contactEdit, setContactEdit] = useState<{ [id: number]: { status: string; adminComment: string } }>({});
  const [updatingConsult, setUpdatingConsult] = useState<number | null>(null);
  const [updatingContact, setUpdatingContact] = useState<number | null>(null);
  const [updateError, setUpdateError] = useState<string | null>(null);
  // --- UI IMPROVEMENTS ---
  // 1. Add state for summary counts
  const [consultCount, setConsultCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);
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
    const token = localStorage.getItem('adminToken');
    if (token) {
      setAdminToken(token);
      setShowDashboard(true);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      setLoadingTables(true);
      try {
        const token = localStorage.getItem('adminToken');
        const [consultRes, contactRes, adminRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/admin/consultations`, { headers: { Authorization: `Bearer ${token}` } }),
          fetch(`${API_BASE_URL}/api/admin/contacts`, { headers: { Authorization: `Bearer ${token}` } }),
          fetch(`${API_BASE_URL}/api/admins/count`, { headers: { Authorization: `Bearer ${token}` } })
        ]);
        const consultData = await consultRes.json();
        const contactData = await contactRes.json();
        const adminData = await adminRes.json();
        if (consultData.success) {
          setConsultations(consultData.consultations);
          setConsultCount(consultData.consultations.length);
        }
        if (contactData.success) {
          setContacts(contactData.contacts);
          setContactCount(contactData.contacts.length);
        }
        if (adminData.success) {
          setAdminCount(adminData.count);
        }
      } finally {
        setLoadingTables(false);
      }
    }
    if (showDashboard) fetchData();
  }, [showDashboard]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem('adminToken', data.token);
        setAdminToken(data.token);
        setShowDashboard(true);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch {
      setError('Network error');
    }
    setLoading(false);
  };

  const handleAdminLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmAdminLogout = () => {
    localStorage.removeItem('adminToken');
    setAdminToken(null);
    setShowDashboard(false);
    setShowLogoutModal(false);
    setDrawerOpen(false);
  };

  const cancelAdminLogout = () => {
    setShowLogoutModal(false);
  };

  if (!showDashboard) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md border border-gold/20">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <img src={logo} alt="Ragam Elyssia Logo" className="h-10 w-auto object-contain drop-shadow-md" />
            <span className="font-playfair text-2xl font-bold text-charcoal tracking-wide">Admin Login</span>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-charcoal font-medium mb-1">Email</label>
              <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-ivory focus:outline-none focus:ring-2 focus:ring-gold/30" value={loginForm.email} onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))} />
            </div>
            <div>
              <label className="block text-charcoal font-medium mb-1">Password</label>
              <input type="password" required className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-ivory focus:outline-none focus:ring-2 focus:ring-gold/30" value={loginForm.password} onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))} />
            </div>
            <div>
              <label className="block text-charcoal font-medium mb-1 flex items-center gap-1"><Key className="h-4 w-4 text-gold" /> Security Code</label>
              <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-ivory focus:outline-none focus:ring-2 focus:ring-gold/30" value={loginForm.securityCode} onChange={e => setLoginForm(f => ({ ...f, securityCode: e.target.value }))} />
            </div>
            {error && <div className="text-red-600 text-sm text-center">{error}</div>}
            <button type="submit" disabled={loading} className="w-full bg-gold text-charcoal font-semibold py-3 rounded-lg hover:bg-gold/80 transition-all">
              {loading ? 'Logging in...' : 'Login as Admin'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      {/* Header with logo and title */}
      <header className="w-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-10 py-4 md:py-6 border-b border-gold/10 bg-ivory/80 gap-2">
        {/* Logo + Title Grouped */}
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Ragam Elyssia Logo" className="h-10 w-auto object-contain drop-shadow-md" />
            <span className="font-playfair text-xl lg:text-2xl font-bold text-charcoal tracking-wide">Ragam Elyssia</span>
          </Link>
          <span className="font-playfair text-xl lg:text-2xl font-bold text-charcoal tracking-wide ml-2">Admin Dashboard</span>
        </div>
        {/* Actions */}
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 w-full lg:w-auto mt-2 lg:mt-0 justify-end">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center">
              <UserIcon className="h-6 w-6 text-gold" />
            </div>
            <span className="font-inter text-charcoal text-base font-medium">Admin</span>
          </div>
          {/* Add New User button here if needed */}
          <button onClick={handleAdminLogout} className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition font-semibold border border-red-100">
            <LogOut className="h-5 w-5" /> Log out
          </button>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">
        {/* Summary Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-10 py-6 md:py-8">
          <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4 border border-gold/10">
            <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center">
              <ClipboardList className="h-7 w-7 text-gold" />
            </div>
            <div>
              <div className="font-inter text-charcoal text-lg font-bold">{consultCount}</div>
              <div className="font-inter text-sm text-muted-foreground">Total Consultations</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4 border border-gold/10">
            <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center">
              <Users className="h-7 w-7 text-gold" />
            </div>
            <div>
              <div className="font-inter text-charcoal text-lg font-bold">{contactCount}</div>
              <div className="font-inter text-sm text-muted-foreground">Total Contacts</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4 border border-gold/10">
            <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center">
              <Crown className="h-7 w-7 text-gold" />
            </div>
            <div>
              <div className="font-inter text-charcoal text-lg font-bold">{adminCount}</div>
              <div className="font-inter text-sm text-muted-foreground">Admins</div>
            </div>
          </div>
        </section>

        {/* Tables Placeholder */}
        <section className="px-2 md:px-10 pb-6 md:pb-10 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow p-4 md:p-8 border border-gold/10 mb-0">
            <h2 className="font-playfair text-lg md:text-xl font-bold text-charcoal mb-4">Consultations</h2>
            {loadingTables ? (
              <div className="text-muted-foreground text-center py-6 md:py-8">Loading...</div>
            ) : consultations.length === 0 ? (
              <div className="text-muted-foreground text-center py-6 md:py-8">No consultations found.</div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="bg-cream/50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Name</th>
                        <th className="px-4 py-3 text-left font-semibold">Email</th>
                        <th className="px-4 py-3 text-left font-semibold">Event Type</th>
                        <th className="px-4 py-3 text-left font-semibold">Event Date</th>
                        <th className="px-4 py-3 text-left font-semibold">Location</th>
                        <th className="px-4 py-3 text-left font-semibold">Budget</th>
                        <th className="px-4 py-3 text-left font-semibold">Status</th>
                        <th className="px-4 py-3 text-left font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedConsultations.map((c, idx) => (
                        <tr key={c.id} className={`border-b last:border-b-0 ${idx % 2 === 0 ? 'bg-cream/30' : 'bg-white'} hover:bg-gold/10 transition`}>
                          <td className="px-4 py-3 rounded-l-xl">{c.name}</td>
                          <td className="px-4 py-3">{c.email}</td>
                          <td className="px-4 py-3">{c.eventType}</td>
                          <td className="px-4 py-3">{c.eventDate}</td>
                          <td className="px-4 py-3">{c.location}</td>
                          <td className="px-4 py-3">{c.budget}</td>
                          <td className="px-4 py-3">
                            <select
                              className="border rounded px-2 py-1 text-xs bg-white"
                              value={consultEdit[c.id]?.status ?? c.status}
                              onChange={e => setConsultEdit(edit => ({ ...edit, [c.id]: { ...edit[c.id], status: e.target.value } }))}
                            >
                              <option value="pending">Pending</option>
                              <option value="active">Active</option>
                              <option value="completed">Completed</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="px-4 py-3 rounded-r-xl">
                            <button
                              className="mt-1 bg-gold text-charcoal px-3 py-1 rounded-lg text-xs font-semibold shadow hover:bg-gold/90 transition disabled:opacity-60"
                              disabled={updatingConsult === c.id}
                              onClick={async () => {
                                setUpdatingConsult(c.id);
                                setUpdateError(null);
                                try {
                                  const token = localStorage.getItem('adminToken');
                                  const res = await fetch(`${API_BASE_URL}/api/admin/consultations/${c.id}`, {
                                    method: 'PATCH',
                                    headers: {
                                      'Content-Type': 'application/json',
                                      Authorization: `Bearer ${token}`,
                                    },
                                    body: JSON.stringify({
                                      status: consultEdit[c.id]?.status ?? c.status
                                    }),
                                  });
                                  const data = await res.json();
                                  if (res.ok && data.success) {
                                    setConsultations(prev => prev.map(row => row.id === c.id ? { ...row, status: data.consultation.status } : row));
                                  } else {
                                    setUpdateError(data.message || 'Update failed');
                                  }
                                } catch {
                                  setUpdateError('Network error');
                                }
                                setUpdatingConsult(null);
                              }}
                            >
                              {updatingConsult === c.id ? 'Updating...' : 'Update'}
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
          </div>
          <div className="bg-white rounded-2xl shadow p-4 md:p-8 border border-gold/10">
            <h2 className="font-playfair text-lg md:text-xl font-bold text-charcoal mb-4">Contact Requests</h2>
            {loadingTables ? (
              <div className="text-muted-foreground text-center py-6 md:py-8">Loading...</div>
            ) : contacts.length === 0 ? (
              <div className="text-muted-foreground text-center py-6 md:py-8">No contact requests found.</div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="bg-cream/50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Name</th>
                        <th className="px-4 py-3 text-left font-semibold">Email</th>
                        <th className="px-4 py-3 text-left font-semibold">Subject</th>
                        <th className="px-4 py-3 text-left font-semibold">Message</th>
                        <th className="px-4 py-3 text-left font-semibold">Status</th>
                        <th className="px-4 py-3 text-left font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedContacts.map((c, idx) => (
                        <tr key={c.id} className={`border-b last:border-b-0 ${idx % 2 === 0 ? 'bg-cream/30' : 'bg-white'} hover:bg-gold/10 transition`}>
                          <td className="px-4 py-3 rounded-l-xl">{c.name}</td>
                          <td className="px-4 py-3">{c.email}</td>
                          <td className="px-4 py-3">{c.subject}</td>
                          <td className="px-4 py-3 max-w-xs truncate" title={c.message}>{c.message}</td>
                          <td className="px-4 py-3">
                            <select
                              className="border rounded px-2 py-1 text-xs bg-white"
                              value={contactEdit[c.id]?.status ?? c.status}
                              onChange={e => setContactEdit(edit => ({ ...edit, [c.id]: { ...edit[c.id], status: e.target.value } }))}
                            >
                              <option value="new">New</option>
                              <option value="replied">Replied</option>
                            </select>
                          </td>
                          <td className="px-4 py-3 rounded-r-xl">
                            <button
                              className="mt-1 bg-gold text-charcoal px-3 py-1 rounded-lg text-xs font-semibold shadow hover:bg-gold/90 transition disabled:opacity-60"
                              disabled={updatingContact === c.id}
                              onClick={async () => {
                                setUpdatingContact(c.id);
                                setUpdateError(null);
                                try {
                                  const token = localStorage.getItem('adminToken');
                                  const res = await fetch(`${API_BASE_URL}/api/admin/contacts/${c.id}`, {
                                    method: 'PATCH',
                                    headers: {
                                      'Content-Type': 'application/json',
                                      Authorization: `Bearer ${token}`,
                                    },
                                    body: JSON.stringify({
                                      status: contactEdit[c.id]?.status ?? c.status
                                    }),
                                  });
                                  const data = await res.json();
                                  if (res.ok && data.success) {
                                    setContacts(prev => prev.map(row => row.id === c.id ? { ...row, status: data.contact.status } : row));
                                  } else {
                                    setUpdateError(data.message || 'Update failed');
                                  }
                                } catch {
                                  setUpdateError('Network error');
                                }
                                setUpdatingContact(null);
                              }}
                            >
                              {updatingContact === c.id ? 'Updating...' : 'Update'}
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
          </div>
        </section>
        {updateError && <div className="text-red-600 text-sm text-center my-2">{updateError}</div>}
      </main>
      {showLogoutModal && ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-2">
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 max-w-xs w-full border border-gold/20 flex flex-col items-center">
            <Crown className="h-10 w-10 text-gold mb-2" />
            <h2 className="font-playfair text-lg font-bold text-charcoal mb-2 text-center">Log out as Admin?</h2>
            <p className="text-muted-foreground text-center mb-6">Are you sure you want to log out as admin?</p>
            <div className="flex gap-4 w-full flex-col sm:flex-row">
              <button onClick={cancelAdminLogout} className="flex-1 py-2 rounded-lg border border-gold/20 bg-ivory text-charcoal font-semibold hover:bg-gold/10 transition mb-2 sm:mb-0">Cancel</button>
              <button onClick={confirmAdminLogout} className="flex-1 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition">Log out</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
} 