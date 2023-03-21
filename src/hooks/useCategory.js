import { useState } from "react";
import { getCategoriesApi, addCategoryApi } from '../api/category';
import { useAuth } from './';

export function useCategory() {

    const [categories, setCategories] = useState(null);
    const { auth } = useAuth();

    const getCategories = async () => {
        try {
            const response = await getCategoriesApi();
            setCategories(response);
        } catch (error) {
            throw error;
        }
    };

    const addCategory = async (data) => {
        try {
            console.log(data);
            await addCategoryApi(data, auth.token);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return {
        categories,
        getCategories,
        addCategory,
    }
}