type NavLinkButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

const NavLinkButton = ({ children, onClick }: NavLinkButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group hover:cursor-pointer relative inline-block text-[24px] font-medium italic tracking-[-0.05em] transition-all duration-200 hover:opacity-70 active:opacity-50 sm:text-[32px] md:text-[40px]"
    >
      {children}
      <span
        className="absolute right-0 -bottom-1 h-1 w-0 bg-current transition-all duration-300 ease-out group-hover:w-full group-focus-visible:w-full"
      />
    </button>
  )
}

export default NavLinkButton