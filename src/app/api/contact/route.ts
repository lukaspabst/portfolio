import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Simulate email sending (Replace with Resend, Nodemailer, etc.)
        console.log("--- NEW CONTACT FORM SUBMISSION ---");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        console.log("-----------------------------------");

        // Simulate delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
