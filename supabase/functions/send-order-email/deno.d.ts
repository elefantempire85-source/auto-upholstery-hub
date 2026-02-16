/** Type declarations for Deno runtime (Supabase Edge Functions). */

declare namespace Deno {
  const env: {
    get(key: string): string | undefined;
  };
}

declare module "https://deno.land/std@0.190.0/http/server.ts" {
  export function serve(handler: (req: Request) => Promise<Response>): void;
}

declare module "npm:resend@2.0.0" {
  export class Resend {
    constructor(apiKey: string);
    emails: {
      send(options: {
        from: string;
        to: string[];
        subject: string;
        html: string;
        reply_to?: string;
      }): Promise<{ data?: unknown; error?: unknown }>;
    };
  }
}
