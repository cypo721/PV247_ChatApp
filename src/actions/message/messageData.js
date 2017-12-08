export const convertFromServerMessages = (data) => (
    data.map((msg) => ({
        id: msg.id,
        value: msg.value,
        createdAt: msg.createdAt,
        createdBy: msg.createdBy,
        updatedBy: msg.updatedBy,
        updatedAt: msg.updatedAt,
        customData: JSON.parse(msg.customData || '{}')
    })
));

export const convertNewMessage = (msg) => ({
    id: msg.id,
    value: msg.value,
    createdAt: msg.createdAt,
    createdBy: msg.createdBy,
    updatedBy: msg.updatedBy,
    updatedAt: msg.updatedAt,
    customData: JSON.parse(msg.customData || '{}')
});