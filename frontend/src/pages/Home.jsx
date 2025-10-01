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
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Discover the perfect gifts and help make this birthday celebration truly special!
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Package className="w-8 h-8 mx-auto mb-3 text-indigo-600" />
              <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Items</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <div className="text-2xl font-bold text-gray-900">{stats.purchased}</div>
              <div className="text-sm text-gray-600">Purchased</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-orange-600" />
              <div className="text-2xl font-bold text-gray-900">{stats.remaining}</div>
              <div className="text-sm text-gray-600">Remaining</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Gift className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <div className="text-2xl font-bold text-gray-900">${stats.totalValue.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Total Value</div>
            </CardContent>
          </Card>
        </div>

        {/* Add Item Section */}
        <AddWishlistItem 
          onAddItem={handleAddItem}
          isOpen={showAddForm}
          onToggle={() => setShowAddForm(!showAddForm)}
        />

        {/* Filters Section */}
        <Card className="mb-8 bg-white shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center gap-2 text-gray-700">
                <Filter className="w-5 h-5" />
                <span className="font-medium">Filter & Search:</span>
              </div>
              
              <div className="flex-1 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search wishlist items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Badge variant="outline" className="text-sm">
                {filteredItems.length} items found
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Wishlist Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12">
            {filteredItems.map((item) => (
              <WishlistCard 
                key={item.id} 
                item={item} 
                onTogglePurchased={handleTogglePurchased}
              />
            ))}
          </div>
        ) : (
          <Card className="text-center py-16 bg-white shadow-lg border-0">
            <CardContent>
              <Gift className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Categories');
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Home;