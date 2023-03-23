import Home from "@/app/(public)/page"
import { render, screen } from "@testing-library/react"

describe("Home page", () => {
  it("Should render properly", () => {
    render(<Home />)

    expect(screen.getByText("Diego")).toBeInTheDocument()
  })
})