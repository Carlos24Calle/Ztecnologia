const QuetoModel = require("../../models/Queto");
const QuetoProductModel = require("../../models/QuetoProduct");
const ProductModel = require("../../models/Product");
const UserModel = require("../../models/User");
const UserDetailModel = require("../../models/UserDetail");
const ClientModel = require("../../models/Client");

class Queto {
  async getAll(req, res) {
    const response = await QuetoModel.findAll({
      attributes: ["id", "queto_number", "user_id", "client_id"],

      include: [
        {
          model: ProductModel,
          attributes: [
            "id",
            "ref",
            "name",
            "brand",
            "amount",
            "price",
            "discount_price",
          ],
          through: {
            attributes: ["id", "amount_product"],
          },
        },
        {
          model: UserModel,
          attributes: ["id", "email"],
          include: {
            model: UserDetailModel,
            attributes: ["id", "firs_name", "last_name", "phone"],
          },
        },
        {
          model: ClientModel,
          attributes: [
            "type_document",
            "number_document",
            "first_name",
            "last_name",
          ],
        },
      ],
    });
    res.status(200).json({
      response,
    });
  }
  async getById(req, res) {
    const { quetoId } = req.params;
    const response = await QuetoModel.findOne({
      where: { id: quetoId },
      include: {
        model: ProductModel,
        attributes: [
          "id",
          "ref",
          "name",
          "brand",
          "amount",
          "price",
          "discount_price",
        ],
        through: {
          attributes: ["id", "amount_product"],
        },
      },
    });
  }

  async create(req, res) {
    const { queto_number, user_id, client_id, products, expiration_queto } =
      req.body;

    const quetoExisting = await QuetoModel.findOne({ where: { queto_number } });

    if (quetoExisting === null) {
      const createQueto = await QuetoModel.create({
        queto_number,
        user_id,
        client_id,
      });
      const quetoId = createQueto?.id;

      if (quetoId) {
        const InsertQuetoProducts = (quetoId, product) => {
          QuetoProductModel.create({
            product_id: product?.product_id,
            queto_id: quetoId,
            amount_product: product?.amount_product,
            expiration_queto: expiration_queto,
          });
        };

        products.forEach((product) => {
          InsertQuetoProducts(quetoId, product);
        });

        res.status(201).json({
          ok: true,
          status: 201,
          message: "Queto created",
          response: createQueto,
        });
      }
    } else {
      res.status(200).json({
        ok: true,
        status: 200,
        message: "Cotizacion ya esta registrada",
      });
    }
  }
}

module.exports = Queto;
