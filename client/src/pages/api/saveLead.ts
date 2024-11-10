import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import { ILeadData } from '@/contracts/ILeadData';

const LEAD_CSV_PATH = path.join(process.cwd(), 'lead.csv');

async function saveLeadToCSV(lead: ILeadData) {
  const headers = Object.keys(lead);
  const leadDataRow = Object.values(lead).join(',');

  if (!fs.existsSync(LEAD_CSV_PATH)) {
    fs.writeFileSync(LEAD_CSV_PATH, headers.join(',') + '\n', { flag: 'w' });
  }

  fs.appendFileSync(LEAD_CSV_PATH, leadDataRow + '\n');
}

async function sendMail(subject: string, text: string, to: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "devxquad@gmail.com",
      pass: 'devXquad08/06/2024',
    },
  });

  await transporter.sendMail({
    from: "devxquad@gmail.com",
    to,
    subject,
    text,
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const lead: ILeadData = req.body;

    if (!lead || !lead.email) {
      res.status(400).json({ error: 'Invalid lead data' });
      return;
    }

    try {
      // Save the lead to CSV file
      await saveLeadToCSV(lead);

      // Send notification email to the team
      await sendMail('New Lead Received', `You received a new lead from ${lead.firstName} ${lead.lastName}.`, 'atuljoshi94170@gmail.com');

      // Send acknowledgment email to the lead
      await sendMail('Thank you for reaching out', 'Our representative will contact you shortly.', lead.email);

      res.status(200).json({ message: 'Lead saved and emails sent' });
    } catch (error) {
      console.error('Error processing lead:', error);
      res.status(500).json({ error: 'Error processing lead' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}