import mongoose from 'mongoose';

const ZambiaMessageSchema = new mongoose.Schema({
	recipient: {
        type: String,
        required: true
    },
	senderId: {
        type: String,
    },
    medium: {
        type: String,
    },

	reference: {
        type: String,
        required: true
    },

	code: {
        type: String,
    },

    ttl: {
        type: Date,
    },

    message: {
        type: String,
    },
    // appId: {
    //     type: Number,
    // },
    provider: {
        type: String,
    },
    // country: {
    //     type: String,
    // },
    status: {
        type: String
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    // lastAttemptAt: {
    //     type: Date
    // },
    // retryCount: {
    //     type: String,
    // },
    messageId: {
        type: String
    },
    bulkId: {
        type: String
    },
    callback: {
        type: String,

    },
}, { timestamps: { createdAt: 'created_at' } });

const ZambiaMessage = mongoose.model('ZambiaMessage', ZambiaMessageSchema);
export default ZambiaMessage;
// export default ZambiaMessageSchema;