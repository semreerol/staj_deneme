// src/services/eventService.js

const BASE_URL = 'https://localhost:7282/api/home/users'; // veya backend'inizin URL'si

export const sendEventData = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/api/data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error('Veri gönderilirken hata oluştu.');
        }
    } catch (error) {
        console.error('İstek sırasında bir hata oluştu:', error);
        throw error;
    }
};
