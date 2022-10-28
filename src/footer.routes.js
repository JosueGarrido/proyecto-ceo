// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "./components/MKTypography";

// Images
import logoCT from "./assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Proyecto CEO",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.wocking.com" },
        { name: "freebies", href: "https://www.wocking.com" },
        { name: "premium tools", href: "https://www.wocking.com" },
        { name: "blog", href: "https://www.wocking.com" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://www.wocking.com" },
        { name: "bits & snippets", href: "https://www.wocking.com" },
        { name: "affiliate program", href: "https://www.wocking.com" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.wocking.com" },
        { name: "knowledge center", href: "https://www.wocking.com" },
        { name: "custom development", href: "https://www.wocking.com" },
        { name: "sponsorships", href: "https://www.wocking.com" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.wocking.com" },
        { name: "privacy policy", href: "https://www.wocking.com" },
        { name: "licenses (EULA)", href: "https://www.wocking.com" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href="https://www.wocking.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Wocking
      </MKTypography>
      .
    </MKTypography>
  ),
};
