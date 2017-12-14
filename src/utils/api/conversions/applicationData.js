export const convertFromServerData = (data) => ({
    id: data.id,
    channels: data.channels.map((channel) => ({
        id: channel.id,
        name: channel.name,
        customData: JSON.parse(channel.customData || '{}'),
        isSelected: false
    }))
});