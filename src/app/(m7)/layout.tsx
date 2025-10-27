export default async function M7Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-color-background text-color-foreground">
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}