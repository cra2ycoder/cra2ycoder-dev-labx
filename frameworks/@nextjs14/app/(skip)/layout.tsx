export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {children}
      <h1>Group Layout Rendered!</h1>
    </div>
  )
}
