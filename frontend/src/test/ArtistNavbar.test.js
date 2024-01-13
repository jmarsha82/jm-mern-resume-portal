import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import ArtistNavbar from "../components/ArtistNavbar";
import { HashLink } from "react-router-hash-link";


test("ArtistNavbar rendered", () => {
    render(<ArtistNavbar />);
    const artistNavbarElement = screen.getByTestId("artist-navbar");
    expect(artistNavbarElement).toBeInTheDocument();
})

test("HashLink rendered", () => {
    render(<HashLink />);
    const artistNavbarElement = screen.getByTestId("artist-navbar-hashlink");
    expect(artistNavbarElement).toBeInTheDocument();
})