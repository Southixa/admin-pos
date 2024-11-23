import * as Yup from 'yup';

export const validationSchema = {
    product: Yup.object().shape({
        name: Yup.string().required("ກະລຸນາໃສ່ຂໍ້ມູນ"),
        price: Yup.number().typeError("ເປັນຕົວເລກເທົ່ານັ້ນ").required("ກະລຸນາໃສ່ຂໍ້ມູນ"),
        category: Yup.string().required("ກະລຸນາໃສ່ຂໍ້ມູນ"),
    }),
    category: Yup.object().shape({
        name: Yup.string().required("ກະລຸນາໃສ່ຂໍ້ມູນ"),
    }),
}