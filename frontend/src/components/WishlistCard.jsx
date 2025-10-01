import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Check, Star, Calendar, DollarSign } from 'lucide-react';

const WishlistCard = ({ item, onTogglePurchased }) => {
  const priorityColors = {
    High: 'bg-red-100 text-red-800 border-red-200',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200', 
    Low: 'bg-green-100 text-green-800 border-green-200'
  };

  return (
    <Card className={`group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${item.purchased ? 'opacity-60 bg-gray-50' : 'bg-white'}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge className={priorityColors[item.priority]}>
            <Star className="w-3 h-3 mr-1" />
            {item.priority}
          </Badge>
        </div>
        {item.purchased && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
              <Check className="w-5 h-5" />
              Purchased
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg text-gray-900 leading-tight">{item.title}</h3>
          <Badge variant="outline" className="ml-2 text-xs">
            {item.category}
          </Badge>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Added {new Date(item.added).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1 font-semibold text-gray-900">
            <DollarSign className="w-4 h-4" />
            {item.price.toFixed(2)}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={() => onTogglePurchased(item.id)}
          variant={item.purchased ? "outline" : "default"}
          className="w-full transition-all duration-200"
        >
          {item.purchased ? 'Mark as Unpurchased' : 'Mark as Purchased'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WishlistCard;