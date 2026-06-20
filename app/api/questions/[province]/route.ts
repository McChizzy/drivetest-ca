import { NextResponse } from 'next/server';
import { getQuestionsByProvince } from '@/lib/questions';
import type { Question } from '@/lib/types';

export async function GET(
  request: Request,
  { params }: { params: { province: string } }
) {
  try {
    const questions = getQuestionsByProvince(params.province);
    return NextResponse.json(questions);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}