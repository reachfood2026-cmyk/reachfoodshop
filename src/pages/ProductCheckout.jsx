import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { productTranslations } from '../data/translations';

export default function ProductCheckout() {
  const { id } = useParams();
  const product = getProductById(parseInt(id));
  const { addToCart, formatPrice } = useCart();
  const { t, language, isRTL } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-playfair font-bold text-heading mb-4">
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const productName = productTranslations[language]?.[product.id]?.name || product.name;
  const productDescription = productTranslations[language]?.[product.id]?.description || product.description;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-fade-in">
          {t('products.addToCart')} ✓
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className={`flex items-center gap-2 text-sm mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Link to="/" className="text-heading-light hover:text-primary transition-colors">
            {t('nav.home')}
          </Link>
          <span className="text-heading-light">/</span>
          <Link to="/shop" className="text-heading-light hover:text-primary transition-colors">
            {t('nav.shop')}
          </Link>
          <span className="text-heading-light">/</span>
          <span className="text-heading font-medium">{productName}</span>
        </nav>

        <div className={`grid lg:grid-cols-2 gap-12 ${isRTL ? 'direction-rtl' : ''}`}>
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-900">
              <img
                src={product.image}
                alt={productName}
                className="w-full h-full object-cover"
              />
              {product.originalPrice && (
                <span className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} bg-teal text-white text-sm font-bold px-4 py-2 rounded-full`}>
                  {t('products.save')} {Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Food Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900">
              <img
                src="/food/roozchickn.jpg"
                alt="Food preparation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className={`${isRTL ? 'text-right' : ''}`}>
            <div className="bg-white rounded-3xl p-8 lg:p-12">
              {/* Product Title */}
              <h1 className="font-playfair text-4xl font-bold text-heading mb-4">
                {productName}
              </h1>

              {/* Stock Status */}
              <div className={`flex items-center gap-2 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span
                  className={`w-3 h-3 rounded-full ${
                    product.inStock ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
                <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? t('shop.inStock') : t('shop.outOfStock')}
                </span>
              </div>

              {/* Price */}
              <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-4xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-heading-light line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-heading-light text-lg mb-8 leading-relaxed">
                {productDescription}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 my-8" />

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-heading font-medium mb-4">
                  {t('cart.quantity') || 'Quantity'}
                </label>
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-12 h-12 rounded-full bg-cream hover:bg-cream-dark text-heading font-bold text-xl transition-colors flex items-center justify-center"
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold text-heading w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-12 h-12 rounded-full bg-cream hover:bg-cream-dark text-heading font-bold text-xl transition-colors flex items-center justify-center"
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className={`flex items-center justify-between mb-8 p-6 bg-cream rounded-2xl ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-heading-light font-medium">
                  {t('cart.subtotal') || 'Subtotal'}
                </span>
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(product.price * quantity)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                    product.inStock
                      ? 'bg-primary text-white hover:bg-primary-hover hover:shadow-xl'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? t('products.addToCart') : t('products.outOfStock')}
                </button>

                <Link
                  to="/shop"
                  className="block w-full py-4 rounded-full font-semibold text-lg text-center border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {t('cart.continueShopping') || 'Continue Shopping'}
                </Link>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-4 text-sm text-heading-light">
                  <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>✓</span>
                    <span>{t('features.readyInMinutes')}</span>
                  </div>
                  <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>✓</span>
                    <span>{t('features.qualityIngredients')}</span>
                  </div>
                  <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>✓</span>
                    <span>{t('aboutSection.sustainablePackaging')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
