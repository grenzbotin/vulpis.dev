export const secrets = {
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:1337',
  CMS_URL: process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:1337',
  MAIL_ADDRESS: process.env.NEXT_PUBLIC_MAIL_ADDRESS || 'test@admin.com',
  CONTACT_ADDRESS_1: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_1 || 'some address 1',
  CONTACT_ADDRESS_2: process.env.NEXT_PUBLIC_CONTACT_ADDRESS_2 || 'some address 2',
  CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE || '101010010100',
  USTID: process.env.NEXT_PUBLIC_USTID || 'NANA 12312'
};
