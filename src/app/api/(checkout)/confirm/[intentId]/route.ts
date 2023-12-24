import { prisma } from "@/utils/connect";
import { NextResponse } from "../../../../../../node_modules/next/server";

export const PUT = async ({ params }: { params: { intentId: string } }) => {
  const { intentId } = params;
  console.log(params, "!!")

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Being Prepared!" },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
