export default async function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <div className="">
        {children}
      </div>
    </html>
  )
}

//      <div className="animate-appear">
