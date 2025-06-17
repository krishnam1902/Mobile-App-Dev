
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@^16.10.0';
import { getOrCreateStripeCustonerForSupabaseUser } from '../supabase.ts';

export const stripe = Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
 httpClient: Stripe.createFetchHttpClient(),
});

Deno.serve(async req => {
  const { totalAmount } = await req.json();

  const customer = await getOrCreateStripeCustonerForSupabaseUser(req);

  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer },
    { apiVersion: '2020-08-27' }
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalAmount,
    currency: 'usd',
    customer, 
  });

  const response = {
    paymentIntent: paymentIntent.client_secret,
    publicKey: Deno.env.get('STRIPE_PUBLISHABLE_KEY'),
    ephemeralKey: ephemeralKey.secret,
    customer,
  };

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
});

