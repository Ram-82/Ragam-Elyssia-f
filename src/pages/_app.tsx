import '../styles/globals.css';
import { UserProvider } from '@/context/UserContext';

export default function App({ children }: { children: React.ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
} 