export function FooterSection() {
  return (
    <footer className="w-full py-8 mt-12 border-t border-border bg-background">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Yin Xiangkun. All rights reserved.</p>
      </div>
    </footer>
  )
}
