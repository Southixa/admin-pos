import * as Yup from 'yup';

export const validationSchema = {
    product: Yup.object().shape({
        name: Yup.string().required("ກະລຸນາໃສ່ຂໍ້ມູນ"),
        price: Yup.number().typeError("ເປັນຕົວເລກເທົ່ານັ້ນ").required("ກະລຸນາໃສ່ຂໍ້ມູນ"),
        category: Yup.string().required("ກະລຸນາໃສ່ຂໍ້ມູນ"),
    }),
    category: Yup.object().shape({
        name: Yup.string().required("ກະລຸນາໃສ່ຂໍ້ມູນ"),
        icon: Yup.mixed()
        .required('ກະລຸນາອັບໂຫຼດຮູບພາບ')
        .test('fileSize', 'File is too large', (value) => {
        if (!value) return true; // Let required handle empty files
        return value.size <= 5000000; // 5MB limit
        })
        .test('fileType', 'Unsupported file format', (value) => {
        if (!value) return true;
        return ['image/jpeg', 'image/png'].includes(value.type);
        })
    }),
    login: Yup.object().shape({
        username: Yup.string().required("ກະລຸນາໃສ່ຂໍ້ມູນ"),
        password: Yup.string().required("ກະລຸນາໃສ່ຂໍ້ມູນ"),
    })
}