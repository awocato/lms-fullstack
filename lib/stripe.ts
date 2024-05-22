import Stripe from "stripe";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
    apiVersion: "2024-04-10",
    typescript: true,
});
