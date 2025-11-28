export function Footer() {
  return (
    <footer className="border-t border-[#eadfd4] bg-white py-10 text-sm text-[#7b6555]">
      <div className="container flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} Ristorante Aurora · Tutti i diritti riservati</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-[#b8a291]">
          <a href="#" className="hover:text-[#5c7a5a]">
            Privacy
          </a>
          <a href="#" className="hover:text-[#5c7a5a]">
            Cookie
          </a>
          <a href="#" className="hover:text-[#5c7a5a]">
            Termini
          </a>
        </div>
      </div>
    </footer>
  );
}

