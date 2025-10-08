import { Button, Typography, Box, Avatar, IconButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const darkTheme = {
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)',
    containerBg: 'rgba(0,0,0,0.3)',
    border: '2px solid rgba(0,255,255,0.2)',
    textColor: '#00ffff',
    nameGradient: 'linear-gradient(45deg, #00ffff, #ff00ff, #00ff00)',
    button1: 'linear-gradient(45deg, #ff00ff, #00ffff)',
    button2: 'linear-gradient(45deg, #00ff00, #00ffff)',
    avatarRing: 'conic-gradient(from 0deg, #00ffff, #ff00ff, #00ff00, #ffff00, #00ffff)',
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
    button1: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    button2: 'linear-gradient(45deg, #10b981, #3b82f6)',
    avatarRing: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #10b981, #f59e0b, #3b82f6)',
    floatingOrbs: [
      { bg: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', anim: 'float 6s ease-in-out infinite' },
      { bg: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', anim: 'float 8s ease-in-out infinite reverse' },
      { bg: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)', anim: 'float 10s ease-in-out infinite' }
    ]
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

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
      {/* Theme Toggle Button */}
      <IconButton
        onClick={toggleTheme}
        style={{
          position: 'absolute',
          top: 7,
          left: 20,
          zIndex: 10,
          background: theme.containerBg,
          backdropFilter: 'blur(10px)',
          border: theme.border,
          color: theme.textColor,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}
      >
        {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
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
          maxWidth: 1000,
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

        <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}>
          <Box style={{
            position: 'relative',
            width: 280,
            height: 280,
            borderRadius: '50%',
            padding: 8,
            background: theme.avatarRing,
            boxShadow: isDarkTheme 
              ? '0 0 40px rgba(0,255,255,0.5), 0 0 80px rgba(255,0,255,0.3)'
              : '0 0 40px rgba(59,130,246,0.5), 0 0 80px rgba(139,92,246,0.3)'
          }}>
            <Box style={{
              position: 'absolute',
              inset: -20,
              borderRadius: '50%',
              background: isDarkTheme 
                ? 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
              animation: 'pulse 4s ease-in-out infinite'
            }} />
            <Box style={{
              borderRadius: '50%',
              background: isDarkTheme 
                ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
                : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: isDarkTheme 
                ? '2px solid rgba(0,255,255,0.3)'
                : '2px solid rgba(59,130,246,0.3)',
              boxShadow: isDarkTheme 
                ? 'inset 0 0 30px rgba(0,255,255,0.1)'
                : 'inset 0 0 30px rgba(59,130,246,0.1)'
            }}>
              <Avatar
                src={`${process.env.PUBLIC_URL}/img/profile_picture.jpg`}
                alt="Justin Marshall"
                style={{ 
                  width: 250, 
                  height: 250,
                  border: isDarkTheme 
                    ? '3px solid rgba(0,255,255,0.4)'
                    : '3px solid rgba(59,130,246,0.4)',
                  boxShadow: isDarkTheme 
                    ? '0 0 20px rgba(0,255,255,0.3)'
                    : '0 0 20px rgba(59,130,246,0.3)'
                }}
              />
            </Box>
          </Box>
        </Box>

        <Typography
          variant="h2"
          style={{
            marginBottom: 16,
            fontWeight: 900,
            letterSpacing: 2,
            background: theme.nameGradient,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: theme.textColor,
            textShadow: isDarkTheme 
              ? '0 0 30px rgba(0,255,255,0.5)'
              : '0 0 30px rgba(59,130,246,0.5)',
            animation: 'glow 2s ease-in-out infinite alternate'
          }}
        >
          JUSTIN MARSHALL
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
          SOFTWARE ENGINEER & ARTIST
        </Typography>

        <Box style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            href="/artist"
            style={{
              padding: '16px 32px',
              borderRadius: 25,
              background: theme.button1,
              textTransform: 'none',
              fontWeight: 800,
              color: '#000',
              fontSize: '16px',
              letterSpacing: 1,
              border: isDarkTheme 
                ? '2px solid rgba(255,0,255,0.5)'
                : '2px solid rgba(59,130,246,0.5)',
              boxShadow: isDarkTheme 
                ? '0 0 30px rgba(255,0,255,0.4), inset 0 0 20px rgba(255,255,255,0.1)'
                : '0 0 30px rgba(59,130,246,0.4), inset 0 0 20px rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            ART PORTFOLIO
          </Button>
          <Button
            variant="contained"
            href="/programmer"
            style={{
              padding: '16px 32px',
              borderRadius: 25,
              background: theme.button2,
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
            DEV PROFILE
          </Button>
        </Box>
      </Box>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes glow {
          from { text-shadow: 0 0 30px rgba(0,255,255,0.5), 0 0 60px rgba(255,0,255,0.3); }
          to { text-shadow: 0 0 40px rgba(0,255,255,0.8), 0 0 80px rgba(255,0,255,0.5); }
        }
      `}</style>
    </Box>
  )
}

export default Home