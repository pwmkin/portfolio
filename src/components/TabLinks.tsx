import { PropsWithChildren } from "react";

export type TabLinkValue = string | null | undefined;

export const TabLink = ({
  value,
  children,
  onClick,
  selected,
}: PropsWithChildren & {
  value: TabLinkValue;
  onClick: (value: TabLinkValue) => void;
  selected?: boolean;
}) => (
  <a
    href={value ? "/?tab=" + value : "/"}
    onClick={(e) => {
      e.preventDefault();
      onClick(value);
    }}
    className={`text-black font-mono text-lg ${selected ? "underline" : ""}`}
  >
    {children}
  </a>
);

export const TabLinks = ({
  currentTab,
  setCurrentTab,
  links,
}: {
  currentTab: TabLinkValue;
  setCurrentTab: (value: TabLinkValue) => void;
  links: { value: TabLinkValue; label: string }[];
}) => (
  <div className="flex items-center space-x-4">
    {links.map((link) => (
      <TabLink
        key={link.value}
        value={link.value}
        onClick={setCurrentTab}
        selected={currentTab === link.value}
      >
        {link.label}
      </TabLink>
    ))}
  </div>
);
