import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const profiles = await Profile.find({ published: true }).select("-userId");

    return NextResponse.json(
      { data: profiles },

      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخداده است" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      title,
      desc,
      location,
      phone,
      realState,
      constroctionDate,
      category,
      rules,
      aminities,
      price,
    } = body;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        {
          status: 401,
        }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    console.log(user);
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربر شما یافت نشد" },
        {
          status: 404,
        }
      );
    }
    if (
      !title ||
      !desc ||
      !location ||
      !phone ||
      !realState ||
      !constroctionDate ||
      !category ||
      !price
    ) {
      return NextResponse.json(
        { error: "لطفا تمام فیلدها را وارد کنید" },
        { status: 400 }
      );
    }

    const newProfile = await Profile.create({
      title,
      desc,
      location,
      phone,
      realState,
      constroctionDate,
      aminities,
      rules,
      category,
      price: +price,
      userId: new Types.ObjectId(user._id),
    });
    console.log(newProfile);
    return NextResponse.json(
      {
        message: "آگهی جدید اضافه شد",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخداده است" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();

    const {
      _id,
      title,
      desc,
      location,
      phone,
      realState,
      constroctionDate,
      category,
      rules,
      aminities,
      price,
    } = await req.json();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید" },
        {
          status: 401,
        }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربر شما یافت نشد" },
        {
          status: 404,
        }
      );
    }

    if (
      !_id ||
      !title ||
      !desc ||
      !location ||
      !phone ||
      !realState ||
      !constroctionDate ||
      !category ||
      !price
    ) {
      return NextResponse.json(
        { error: "لطفا تمام فیلدها را وارد کنید" },
        { status: 400 }
      );
    }

    const profile = await Profile.findOne({ _id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی به این آگهی ندارید" },
        { status: 403 }
      );
    }

    profile.title = title;
    profile.desc = desc;
    profile.location = location;
    profile.phone = phone;
    profile.realState = realState;
    profile.constroctionDate = constroctionDate;
    profile.category = category;
    profile.price = price;
    profile.rules = rules;
    profile.aminities = aminities;

    profile.save();

    return NextResponse.json(
      { message: "ویرایش با موفقیت انجام شد!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخداده است" },
      { status: 500 }
    );
  }
}
