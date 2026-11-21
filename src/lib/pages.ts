// Page copy for each side, looked up by division id.

import { about, contactPage, servicesPage } from "./site";
import { consultancyAbout, consultancyContact, consultancyServicesPage } from "./consultancy";
import type { DivisionId } from "./divisions";

export const aboutCopy = { marketing: about, consultancy: consultancyAbout } as const;
export const servicesCopy = { marketing: servicesPage, consultancy: consultancyServicesPage } as const;
export const contactCopy = { marketing: contactPage, consultancy: consultancyContact } as const;

export const getAbout = (id: DivisionId) => aboutCopy[id];
export const getServicesCopy = (id: DivisionId) => servicesCopy[id];
export const getContactCopy = (id: DivisionId) => contactCopy[id];
