import { siteContent } from "@/data/siteContent";

export function isPlaceholder(val: string): boolean {
  if (!val) return true;
  return val.trim().startsWith("[") && val.trim().endsWith("]");
}

export function getPhoneLink(): { href: string; isPlaceholder: boolean; label: string } {
  const phone = siteContent.storeDetails.phone;
  const raw = siteContent.storeDetails.phoneRaw;
  if (!raw || isPlaceholder(phone)) {
    return {
      href: "#unconfigured-phone",
      isPlaceholder: true,
      label: phone,
    };
  }
  return {
    href: `tel:${raw}`,
    isPlaceholder: false,
    label: phone,
  };
}

export function getWhatsAppLink(prefilledText = "Hello, I would like to order groceries."): {
  href: string;
  isPlaceholder: boolean;
  label: string;
} {
  const whatsapp = siteContent.storeDetails.whatsapp;
  const raw = siteContent.storeDetails.whatsappRaw;
  if (!raw || isPlaceholder(whatsapp)) {
    return {
      href: "#unconfigured-whatsapp",
      isPlaceholder: true,
      label: whatsapp,
    };
  }
  const encodedText = encodeURIComponent(prefilledText);
  return {
    href: `https://wa.me/${raw}?text=${encodedText}`,
    isPlaceholder: false,
    label: whatsapp,
  };
}

export function getMapLink(): { href: string; isPlaceholder: boolean; label: string } {
  const address = siteContent.storeDetails.address;
  const mapUrl = siteContent.storeDetails.mapQueryUrl;
  if (isPlaceholder(address) || mapUrl.includes("[ADD+STORE+ADDRESS]")) {
    return {
      href: "#unconfigured-address",
      isPlaceholder: true,
      label: address,
    };
  }
  return {
    href: mapUrl,
    isPlaceholder: false,
    label: address,
  };
}
