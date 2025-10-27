export default async function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <div className="animate-appear">
        {children}
      </div>
    </html>
  )
}