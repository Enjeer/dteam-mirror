const Footer = () => {
  return (
    <footer className="border-t border-border px-4 md:px-12 xl:px-32 py-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-pixel text-primary text-sm">DTEAM</span>
        <div className="flex items-center gap-6">
          <a href="https://discord.com/invite/aFfJH3zW4M" target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">Discord</a>
          <a href="https://github.com/DTEAMTECH" target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          <a href="https://x.com/dteamtech" target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">X (Twitter)</a>
        </div>
        <span className="font-mono text-xs text-muted-foreground">© 2024 DTEAM. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
