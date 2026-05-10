import { Box, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const getEmailJsConfig = () => ({
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    toEmail: process.env.REACT_APP_EMAILJS_TO_EMAIL,
});

const getEmailJsErrorMessage = (error) => {
    if (!error) {
        return "Unknown EmailJS error";
    }

    if (typeof error === "string") {
        return error;
    }

    if (error.text) {
        return error.text;
    }

    if (error.message) {
        return error.message;
    }

    return "Unknown EmailJS error";
};

const Contact = () => {
    const { isDarkTheme } = useTheme();
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    // Use the same theme styling as Home.js but adapted for Contact page
    const darkTheme = {
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)',
        containerBg: 'rgba(0,0,0,0.3)',
        border: '2px solid rgba(0,255,255,0.2)',
        textColor: '#00ffff',
        nameGradient: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ff00)',
        floatingOrbs: [
            { bg: 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)', anim: 'float 6s ease-in-out infinite' },
            { bg: 'radial-gradient(circle, rgba(255,0,255,0.08) 0%, transparent 70%)', anim: 'float 8s ease-in-out infinite reverse' },
            { bg: 'radial-gradient(circle, rgba(0,255,0,0.06) 0%, transparent 70%)', anim: 'float 10s ease-in-out infinite' }
        ]
    };

    const lightTheme = {
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #f8fafc 100%)',
        containerBg: 'rgba(255,255,255,0.8)',
        border: '2px solid rgba(59,130,246,0.3)',
        textColor: '#1e40af',
        nameGradient: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981)',
        floatingOrbs: [
            { bg: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', anim: 'float 6s ease-in-out infinite' },
            { bg: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', anim: 'float 8s ease-in-out infinite reverse' },
            { bg: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)', anim: 'float 10s ease-in-out infinite' }
        ]
    };

    const theme = isDarkTheme ? darkTheme : lightTheme;

    const sendEmail = async () => {
        const { serviceId, templateId, publicKey, toEmail } = getEmailJsConfig();
        const trimmedEmail = email.trim();
        const trimmedSubject = subject.trim();
        const trimmedMessage = message.trim();

        if (!trimmedEmail || !trimmedSubject || !trimmedMessage) {
            setSubmitStatus("Please fill in all fields");
            return;
        }

        if (!serviceId || !templateId || !publicKey || !toEmail) {
            setSubmitStatus("Contact form is not configured yet.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("");

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_email: trimmedEmail,
                    from_name: trimmedEmail,
                    reply_to: trimmedEmail,
                    subject: trimmedSubject,
                    message: trimmedMessage,
                    to_email: toEmail,
                },
                publicKey
            );
            setSubmitStatus("Email sent successfully!");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch (error) {
            const errorMessage = getEmailJsErrorMessage(error);
            console.error("EmailJS send failed:", error);
            setSubmitStatus(`Failed to send email: ${errorMessage}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            style={{
                minHeight: '100vh',
                background: theme.background,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 20px'
            }}
        >
            {/* Animated background elements */}
            {theme.floatingOrbs.map((orb, index) => (
                <Box key={index} style={{
                    position: 'absolute',
                    top: ['10%', '50%', '50%'][index],
                    left: ['10%', '5%', '5%'][index],
                    bottom: index === 1 ? '20%' : undefined,
                    right: index === 1 ? '15%' : undefined,
                    width: ['300px', '150px', '200px'][index],
                    height: ['300px', '150px', '200px'][index],
                    background: orb.bg,
                    borderRadius: '50%',
                    animation: orb.anim
                }} />
            ))}

            <Box
                style={{
                    width: '100%',
                    maxWidth: 600,
                    background: theme.containerBg,
                    backdropFilter: 'blur(20px)',
                    border: theme.border,
                    borderRadius: 32,
                    boxShadow: isDarkTheme 
                        ? '0 0 50px rgba(0,255,255,0.1), inset 0 0 50px rgba(0,255,255,0.05)'
                        : '0 0 50px rgba(59,130,246,0.1), inset 0 0 50px rgba(59,130,246,0.05)',
                    padding: '60px 40px',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {/* Grid overlay */}
                <Box style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: isDarkTheme 
                        ? `linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px)`
                        : `linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px),
                           linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                    borderRadius: 32,
                    pointerEvents: 'none'
                }} />

                <Typography
                    variant={isMobile ? "h4" : "h2"}
                    style={{
                        marginBottom: 16,
                        fontWeight: 900,
                        letterSpacing: isMobile ? 1 : 2,
                        background: theme.nameGradient,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: theme.textColor,
                        fontSize: isMobile ? '1.9rem' : undefined,
                        lineHeight: isMobile ? 1.1 : undefined,
                        textShadow: isDarkTheme 
                            ? '0 0 30px rgba(0,255,255,0.5)'
                            : '0 0 30px rgba(59,130,246,0.5)',
                        animation: 'glow 2s ease-in-out infinite alternate'
                    }}
                >
                    CONTACT
                </Typography>
                
                <Typography
                    variant="h5"
                    style={{
                        marginBottom: 40,
                        color: theme.textColor,
                        fontWeight: 600,
                        letterSpacing: 1,
                        textShadow: isDarkTheme 
                            ? '0 0 20px rgba(0,255,255,0.3)'
                            : '0 0 20px rgba(59,130,246,0.3)'
                    }}
                >
                    Get in Touch
                </Typography>

                <Box style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 30 }}>
                    <TextField
                        label="Your Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: theme.textColor,
                                '& fieldset': {
                                    borderColor: theme.textColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: theme.textColor,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: theme.textColor,
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: theme.textColor,
                            },
                        }}
                    />

                    <TextField
                        label="Subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: theme.textColor,
                                '& fieldset': {
                                    borderColor: theme.textColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: theme.textColor,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: theme.textColor,
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: theme.textColor,
                            },
                        }}
                    />

                    <TextField
                        label="Message"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        variant="outlined"
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                color: theme.textColor,
                                '& fieldset': {
                                    borderColor: theme.textColor,
                                },
                                '&:hover fieldset': {
                                    borderColor: theme.textColor,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: theme.textColor,
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: theme.textColor,
                            },
                        }}
                    />
                </Box>

                <Box style={{ display: 'flex', gap: 20, justifyContent: 'center', marginBottom: 20 }}>
                    <Button
                        variant="contained"
                        href="/"
                        style={{
                            padding: '16px 32px',
                            borderRadius: 25,
                            background: isDarkTheme 
                                ? 'linear-gradient(45deg, #00ff00, #00ffff)'
                                : 'linear-gradient(45deg, #10b981, #3b82f6)',
                            textTransform: 'none',
                            fontWeight: 800,
                            color: '#000',
                            fontSize: '16px',
                            letterSpacing: 1,
                            border: isDarkTheme 
                                ? '2px solid rgba(0,255,0,0.5)'
                                : '2px solid rgba(16,185,129,0.5)',
                            boxShadow: isDarkTheme 
                                ? '0 0 30px rgba(0,255,0,0.4), inset 0 0 20px rgba(255,255,255,0.1)'
                                : '0 0 30px rgba(16,185,129,0.4), inset 0 0 20px rgba(255,255,255,0.1)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        HOME
                    </Button>
                    
                    <Button
                        variant="contained"
                        onClick={sendEmail}
                        disabled={isSubmitting}
                        style={{
                            padding: '16px 32px',
                            borderRadius: 25,
                            background: isDarkTheme 
                                ? 'linear-gradient(45deg, #ffff00, #ff00ff)'
                                : 'linear-gradient(45deg, #f59e0b, #8b5cf6)',
                            textTransform: 'none',
                            fontWeight: 800,
                            color: '#000',
                            fontSize: '16px',
                            letterSpacing: 1,
                            border: isDarkTheme 
                                ? '2px solid rgba(255,255,0,0.5)'
                                : '2px solid rgba(245,158,11,0.5)',
                            boxShadow: isDarkTheme 
                                ? '0 0 30px rgba(255,255,0,0.4), inset 0 0 20px rgba(255,255,255,0.1)'
                                : '0 0 30px rgba(245,158,11,0.4), inset 0 0 20px rgba(255,255,255,0.1)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {isSubmitting ? 'Sending...' : 'SEND EMAIL'}
                    </Button>
                </Box>

                {submitStatus && (
                    <Typography
                        variant="body1"
                        style={{
                            color: submitStatus.includes('successfully') 
                                ? (isDarkTheme ? '#00ff00' : '#10b981')
                                : (isDarkTheme ? '#ff4444' : '#ef4444'),
                            fontWeight: 600,
                            textShadow: isDarkTheme 
                                ? '0 0 10px rgba(0,255,0,0.5)'
                                : '0 0 10px rgba(16,185,129,0.5)'
                        }}
                    >
                        {submitStatus}
                    </Typography>
                )}
            </Box>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes glow {
                    from { text-shadow: 0 0 30px rgba(0,255,255,0.5), 0 0 60px rgba(255,0,255,0.3); }
                    to { text-shadow: 0 0 40px rgba(0,255,255,0.8), 0 0 80px rgba(255,0,255,0.5); }
                }
            `}</style>
        </Box>
    )
}

export default Contact
