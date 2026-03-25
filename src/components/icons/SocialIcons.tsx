import { Instagram, Linkedin } from "lucide-react";

export function InstagramIcon({ className }: { className?: string }) {
  return <Instagram className={className} aria-hidden />;
}

export function LinkedInIcon({ className }: { className?: string }) {
  return <Linkedin className={className} aria-hidden />;
}
