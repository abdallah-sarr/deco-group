// Helper pour utiliser les icônes Ionicons via react-icons
// Les noms correspondent aux Ionicons outlined

import {
  IoSparklesOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoHandLeftOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoLeafOutline,
  IoPeopleOutline,
  IoBarChartOutline,
  IoTrashOutline,
  IoConstructOutline,
  IoSwapHorizontalOutline,
  IoBagHandleOutline,
  IoHeartOutline,
  IoEyeOutline,
  IoBusinessOutline,
  IoDownloadOutline,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoLogoInstagram,
  IoLogoFacebook,
} from 'react-icons/io5'

// Wrapper component pour compatibilité avec l'API react-ionicons
export const IconWrapper = ({ 
  children, 
  color, 
  height, 
  width 
}: { 
  children: React.ReactNode
  color?: string
  height?: string
  width?: string
}) => {
  const size = height ? parseInt(height) : 24
  return (
    <span style={{ color, width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </span>
  )
}

// Export des icônes avec wrapper
export const SparklesOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoSparklesOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const MenuOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoMenuOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const CloseOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoCloseOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const HandLeftOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoHandLeftOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const ChevronBackOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoChevronBackOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const ChevronForwardOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoChevronForwardOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const LeafOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoLeafOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const PeopleOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoPeopleOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const BarChartOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoBarChartOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const TrashOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoTrashOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const ConstructOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoConstructOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const SwapHorizontalOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoSwapHorizontalOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const BagHandleOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoBagHandleOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const HeartOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoHeartOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const EyeOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoEyeOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const BusinessOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoBusinessOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const DownloadOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoDownloadOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const MailOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoMailOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const CallOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoCallOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const LocationOutline = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoLocationOutline size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const LogoInstagram = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoLogoInstagram size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

export const LogoFacebook = ({ color, height, width }: { color?: string; height?: string; width?: string }) => (
  <IconWrapper color={color} height={height} width={width}>
    <IoLogoFacebook size={height ? parseInt(height) : 24} />
  </IconWrapper>
)

