using Microsoft.EntityFrameworkCore.Migrations;

namespace Proiect_II.Migrations
{
    public partial class ProductsImages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageAdress",
                table: "ProductType",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageAdress",
                table: "Product",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageAdress",
                table: "ProductType");

            migrationBuilder.DropColumn(
                name: "ImageAdress",
                table: "Product");
        }
    }
}
