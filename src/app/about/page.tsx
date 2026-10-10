'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaHandsHelping, FaLeaf, FaUsers } from 'react-icons/fa';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12 pt-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About WasteWise</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          WasteWise is a food redistribution platform that connects food donors with charities, food banks, and individuals in need to reduce food waste and fight hunger.
        </p>
      </div>
      
      {/* Feature Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-lg hover:shadow-xl transition duration-300">
          <CardHeader className="flex items-center justify-center">
            <FaHandsHelping className="text-indigo-600 text-5xl" />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Helping Communities</CardTitle>
            <p className="text-indigo-600 dark:text-indigo-300">
              We connect donors with food banks and charities to distribute surplus food effectively.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition duration-300">
          <CardHeader className="flex items-center justify-center">
            <FaLeaf className="text-indigo-600 text-5xl" />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Reducing Waste</CardTitle>
            <p className="text-indigo-600 dark:text-indigo-300">
              Our platform helps minimize food waste by redistributing excess food efficiently.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition duration-300">
          <CardHeader className="flex items-center justify-center">
            <FaUsers className="text-indigo-600 text-5xl" />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle>Community Engagement</CardTitle>
            <p className="text-indigo-600 dark:text-indigo-300">
              We encourage local communities to participate in food donation and waste reduction.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-lg font-semibold">
          Join Us Today
        </Button>
      </div>
    </div>
  );
}