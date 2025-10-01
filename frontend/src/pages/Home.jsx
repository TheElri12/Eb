import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Gift, Star, DollarSign } from 'lucide-react';
import { wishlistItems } from '../mock/wishlist-data';

const Home = () => {
  const priorityColors = {
    High: 'bg-red-100 text-red-800 border-red-200',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200', 
    Low: 'bg-green-100 text-green-800 border-green-200'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <Gift className="w-16 h-16 mx-auto mb-4 animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Elias Richter's
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-100">
              Birthday Wishlist
            </h2>
          </div>
        </div>
      </div>

      {/* Simple Wishlist */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="bg-white shadow-md hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <Badge className={`text-xs ${priorityColors[item.priority]}`}>
                            <Star className="w-3 h-3 mr-1" />
                            {item.priority}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="flex items-center gap-1 font-semibold text-gray-900">
                          <DollarSign className="w-4 h-4" />
                          {item.price.toFixed(2)}
                        </div>
                        {item.purchased && (
                          <Badge className="mt-2 bg-green-100 text-green-800 border-green-200">
                            Purchased
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;