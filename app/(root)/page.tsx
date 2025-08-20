import LocalSearch from '@/components/search/LocalSearch';
import { Button } from '@/components/ui/button';
import ROUTES from '@/constants/routes';
import Link from 'next/link';
import React from 'react'

const questions = [
  { 
    _id: '1', 
    title: 'What is Next.js?', 
    description: 'Next.js is a React framework...', 
    tags: [ 
      { _id: '1', name: 'React' },
      { _id: '2', name: 'JavaScript' },
    ],
    author: {
      _id: '1',
      name: 'John Doe',
      avatar: '/avatars/john_doe.png'
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  { 
    _id: '2', 
    title: 'How to use Tailwind CSS?', 
    description: 'To use Tailwind CSS...',
    author: {
      _id: '2',
      name: 'Jane Smith',
      avatar: '/avatars/jane_smith.png'
    }
  },
  { 
    _id: '3', 
    title: 'What is TypeScript?', 
    description: 'TypeScript is a superset of JavaScript...',
    author: {
      _id: '3',
      name: 'Alice Johnson',
      avatar: '/avatars/alice_johnson.png'
    }
  },
]

interface SearchParams {
  searchParams: Promise<{ [key: string]: string}>
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = '' } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button className='primary-gradient min-h-[46px] px-5 py-3 !text-light-900'>
          <Link href={ROUTES.ASK_QUESTION}>Ask A Question</Link>
        </Button>
      </section>

      <section className="mt-11">
        <LocalSearch 
          route='/'
          imgSrc='/icons/search.svg'
          placeholder='Search questions...'
          otherClasses='flex-1'
        />
      </section>
      {/* HomeFilter */}

      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  )
};

export default Home