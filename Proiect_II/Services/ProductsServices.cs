using Proiect_II.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proiect_II.Services
{
    public class ProductsServices : ProductsServicesInterface
    {
        public ProductsServices()
        {
        }

        public List<Product> RecommandatedProducts(List<Product> productsList)
        {
            List<Product> products = new List<Product>();
            productsList = Enumerable.Reverse(productsList).ToList();
            int i = 1;
            foreach (Product p in productsList)
            {
                if (i <= 4)
                {
                    products.Add(p);
                    i++;
                }
                else break;
            }
            return products;
        }

        public Product SearchedProduct(List<Product> productsList, string text)
        {
            Product product = new Product();
            foreach (Product p in productsList)
            {
                if (p.Name.ToLower().Contains(text.ToLower()))
                {
                    product = p;
                    break;
                }
            }
            return product;
        }

        public List<Product> SearchedProducts(List<Product> productsList, string text)
        {
            text = text.ToLower();
            List<Product> products = new List<Product>();
            int i = 1;
            foreach (Product p in productsList)
            {
                if (i <= 4)
                {
                    if (p.Name.ToLower().Contains(text))
                    {
                        products.Add(p);
                        i++;
                    }
                }
                else break;
            }
            return products;
        }

        public List<Product> SortProducts(string order, string orderType, List<Product> productsList)
        {
            if (order.Equals("ascending"))
            {
                if (orderType.Equals("stock")) productsList = productsList.OrderBy(n => n.Stock).ToList();
                else if (orderType.Equals("price")) productsList = productsList.OrderBy(n => n.Price).ToList();
                else productsList = productsList.OrderBy(n => n.Rating).ToList();
            }
            else
            {
                if (orderType.Equals("stock")) productsList = productsList.OrderByDescending(n => n.Stock).ToList();
                else if (orderType.Equals("price")) productsList = productsList.OrderByDescending(n => n.Price).ToList();
                else productsList = productsList.OrderByDescending(n => n.Rating).ToList();
            }
            return productsList;
        }

        public List<Product> TopProducts(List<Product> productsList)
        {
            List<Product> products = new List<Product>();
            int i = 1;
            foreach (Product p in productsList)
            {
                if (i <= 4)
                {
                    products.Add(p);
                    i++;
                }
                else break;
            }
            return products;
        }
    }
}
