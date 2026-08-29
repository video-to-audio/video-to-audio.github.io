export const languages = {
  en: {
    name: 'English',
    flag: '🇺🇸',
    code: 'en',
    dir: 'ltr'
  },
  es: {
    name: 'Español',
    flag: '🇪🇸',
    code: 'es',
    dir: 'ltr'
  },
  pt: {
    name: 'Português',
    flag: '🇧🇷',
    code: 'pt',
    dir: 'ltr'
  },
  de: {
    name: 'Deutsch',
    flag: '🇩🇪',
    code: 'de',
    dir: 'ltr'
  },
  fr: {
    name: 'Français',
    flag: '🇫🇷',
    code: 'fr',
    dir: 'ltr'
  },
  ja: {
    name: '日本語',
    flag: '🇯🇵',
    code: 'ja',
    dir: 'ltr'
  }
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang: SupportedLanguage = 'en';

export const ui = {
  en: {
    // SEO & Meta
    'site.title': 'Free Video to Audio Converter | Extract MP3, WAV, AAC Online',
    'site.description': 'Convert video to MP3, WAV, AAC, and M4A directly in your browser. 100% private client-side processing using WebAssembly. No file size limits, no server uploads, ultra-fast & free.',
    'site.keywords': 'video to audio, video to mp3, extract audio from video, mp4 to mp3, webm to wav, client side converter, ffmpeg wasm audio extractor',
    
    // Header & Nav
    'nav.brand': 'VideoToAudio',
    'nav.brandTag': 'Studio',
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.formats': 'Formats',
    'nav.faq': 'FAQ',
    'nav.support': 'Support the Developer',
    'theme.toggle': 'Toggle theme',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',

    // Hero Section
    'hero.badge': '100% Private Client-Side WebAssembly',
    'hero.title': 'Extract Crystal-Clear Audio from Any Video',
    'hero.subtitle': 'Convert MP4, WebM, MOV, MKV, and AVI into high-fidelity MP3, WAV, AAC, or M4A. All processing happens locally on your computer - zero server uploads, zero wait queues, unlimited file size.',
    'hero.privacyPill': 'Your files never leave your device',
    'hero.speedPill': 'Hardware accelerated WASM engine',

    // Converter Workspace
    'dropzone.title': 'Drag & Drop your video file here',
    'dropzone.subtitle': 'or click anywhere to browse files from your computer',
    'dropzone.active': 'Drop video file here to begin...',
    'dropzone.formats': 'Supports MP4, WebM, MOV, MKV, AVI, FLV, WMV (Unlimited size)',
    'dropzone.btnBrowse': 'Select Video File',
    'dropzone.processingMeta': 'Analyzing video metadata...',

    // File Preview Card
    'preview.title': 'Loaded Video',
    'preview.duration': 'Duration',
    'preview.size': 'File Size',
    'preview.change': 'Change Video',
    'preview.remove': 'Remove',

    // Settings
    'settings.formatTitle': 'Select Output Audio Format',
    'settings.formatMp3Desc': 'Universal compatibility, great balance of size and quality.',
    'settings.formatWavDesc': 'Lossless uncompressed audio for professional editing & studio production.',
    'settings.formatAacDesc': 'Advanced Audio Coding with superior compression efficiency over MP3.',
    'settings.formatM4aDesc': 'Apple ecosystem optimized audio with high quality AAC container.',

    'settings.bitrateTitle': 'Audio Bitrate / Quality Preset',
    'settings.bitrate128': '128 kbps (Standard Voice/Podcast)',
    'settings.bitrate192': '192 kbps (High Quality Music)',
    'settings.bitrate256': '256 kbps (Studio Quality)',
    'settings.bitrate320': '320 kbps (Ultra HD Audiophile)',
    'settings.bitrateLossless': 'Lossless PCM (16-bit 44.1kHz)',

    'settings.trimTitle': 'Optional Time Trimming',
    'settings.trimEnable': 'Trim specific segment',
    'settings.trimStart': 'Start Time (s)',
    'settings.trimEnd': 'End Time (s)',

    // Action & Progress
    'action.extract': 'Extract Audio Now',
    'action.converting': 'Extracting Audio...',
    'action.cancel': 'Cancel Process',

    'status.init': 'Initializing WebAssembly engine...',
    'status.loadingCore': 'Loading FFmpeg.wasm core into browser memory...',
    'status.writingFs': 'Reading video binary data into virtual filesystem...',
    'status.processing': 'Demuxing & encoding audio stream...',
    'status.readingOutput': 'Building high-fidelity audio Blob...',
    'status.cleanup': 'Freeing virtual memory allocations...',
    'status.complete': 'Extraction complete! Ready for download.',

    // Result Card
    'result.title': 'Audio Extraction Successful!',
    'result.playPreview': 'Audio Preview',
    'result.originalSize': 'Original Video Size',
    'result.audioSize': 'Extracted Audio Size',
    'result.spaceSaved': 'Space Saved',
    'result.downloadBtn': 'Download Audio File',
    'result.convertAnother': 'Convert Another Video',

    // Errors
    'error.title': 'Processing Error',
    'error.unsupported': 'Unsupported video format or corrupted file. Please choose another file.',
    'error.ffmpegInit': 'Failed to load WebAssembly engine. Please check your internet connection or browser WebAssembly support.',
    'error.conversionFailed': 'Failed to convert audio stream. The video might not contain an audio track.',
    'error.dismiss': 'Dismiss',

    // Features Section
    'features.badge': 'Why Choose Us',
    'features.title': 'Built for Absolute Privacy & Maximum Performance',
    'features.subtitle': 'Traditional online converters upload your personal videos to remote cloud servers. Our converter runs 100% inside your browser using cutting-edge WebAssembly technology.',
    
    'features.item1Title': '100% Client-Side Privacy',
    'features.item1Desc': 'Your videos never touch any remote server or cloud storage. Extraction runs locally in your browser memory.',
    
    'features.item2Title': 'Zero File Size Limits',
    'features.item2Desc': 'Extract audio from 500MB, 2GB, or 10GB 4K videos without arbitrary upload caps or subscription paywalls.',
    
    'features.item3Title': 'Single-Threaded WASM Speed',
    'features.item3Desc': 'Powered by FFmpeg compiled to WebAssembly for reliable, hardware-efficient decoding across all modern browsers.',
    
    'features.item4Title': 'Studio Grade Audio (320 kbps)',
    'features.item4Desc': 'Choose between audiophile 320kbps MP3/AAC or bit-for-bit lossless 16-bit WAV PCM output.',
    
    'features.item5Title': 'All Popular Video Formats',
    'features.item5Desc': 'Seamless support for MP4, WebM, QuickTime MOV, MKV, AVI, WMV, and FLV containers.',
    
    'features.item6Title': 'Instant & Always Free',
    'features.item6Desc': 'No registration, no accounts, no credit cards, no watermarks, and zero waiting in server queues.',

    // How It Works
    'how.badge': 'Simple 3-Step Workflow',
    'how.title': 'How to Extract Audio from Video Online',
    'how.subtitle': 'Follow these easy steps to convert any video file to audio in seconds without uploading.',
    'how.step1Title': '1. Select or Drop Your Video',
    'how.step1Desc': 'Drag and drop your video file into the converter box or click to select from your device.',
    'how.step2Title': '2. Pick Format & Quality',
    'how.step2Desc': 'Choose your preferred audio format (MP3, WAV, AAC, M4A) and select your target bitrate up to 320 kbps.',
    'how.step3Title': '3. Extract & Download',
    'how.step3Desc': 'Click "Extract Audio", preview the result in the inline audio player, and save the audio file directly.',

    // Format Matrix
    'matrix.badge': 'Supported Formats',
    'matrix.title': 'Audio Format Specifications',
    'matrix.subtitle': 'Find the ideal format and bitrate combination for your specific audio workflow.',
    'matrix.colFormat': 'Format',
    'matrix.colExtension': 'Extension',
    'matrix.colType': 'Audio Type',
    'matrix.colBitrate': 'Max Bitrate',
    'matrix.colBestFor': 'Best For',
    'matrix.mp3Best': 'Everyday listening, smartphones, car stereos, podcasts',
    'matrix.wavBest': 'Music production, video editing, audio archival, broadcast',
    'matrix.aacBest': 'High-efficiency streaming, mobile devices, modern web playback',
    'matrix.m4aBest': 'Apple Music, iTunes, iOS devices, high quality voice memos',

    // FAQ Section
    'faq.badge': 'Frequently Asked Questions',
    'faq.title': 'Everything You Need to Know',
    'faq.subtitle': 'Got questions about client-side video to audio conversion? We have answers.',
    
    'faq.q1': 'Is my video uploaded to your servers?',
    'faq.a1': 'No. Unlike traditional converters, 100% of the extraction and encoding happens entirely within your web browser using WebAssembly (FFmpeg.wasm). Your video files never leave your computer or smartphone.',
    
    'faq.q2': 'Is there any file size limit?',
    'faq.a2': 'There are no artificial server limits. You can process large video files (several gigabytes) as long as your device has sufficient RAM memory to hold and process the video file in browser memory.',
    
    'faq.q3': 'Which video formats are supported?',
    'faq.a3': 'We support virtually all modern video container formats including MP4 (.mp4), WebM (.webm), QuickTime (.mov), Matroska (.mkv), AVI (.avi), Windows Media (.wmv), and Flash Video (.flv).',
    
    'faq.q4': 'What is the highest audio quality available?',
    'faq.a4': 'You can export uncompressed lossless audio using the WAV format (16-bit PCM 44.1kHz), or ultra-high-definition MP3 and AAC at 320 kbps bitrate for pristine audio fidelity.',
    
    'faq.q5': 'Does this work on mobile phones and tablets?',
    'faq.a5': 'Yes! As long as your mobile browser supports WebAssembly (such as Chrome, Safari, Firefox, Edge on iOS and Android), you can extract audio directly on your phone.',
    
    'faq.q6': 'Is this service completely free to use?',
    'faq.a6': 'Yes, 100% free with no hidden subscriptions, no usage limits, no email registration requirements, and zero audio watermarks.',

    // Footer
    'footer.description': 'Ultra-fast, 100% client-side video to audio extractor built with WebAssembly. Designed for privacy, fidelity, and simplicity.',
    'footer.privacyNote': 'Zero server telemetry. All data is processed locally.',
    'footer.allRights': 'All rights reserved.',
    'footer.disclaimer': 'Powered by open-source FFmpeg WebAssembly technology.'
  },

  es: {
    // SEO & Meta
    'site.title': 'Convertidor de Video a Audio Gratis | Extraer MP3, WAV, AAC Online',
    'site.description': 'Convierte video a MP3, WAV, AAC y M4A directamente en tu navegador. Procesamiento 100% privado en el cliente mediante WebAssembly. Sin límites de tamaño, sin subir archivos.',
    'site.keywords': 'video a audio, video a mp3, extraer audio de video, mp4 a mp3, webm a wav, convertidor sin servidor, extraer audio online gratis',
    
    // Header & Nav
    'nav.brand': 'VideoToAudio',
    'nav.brandTag': 'Studio',
    'nav.features': 'Características',
    'nav.howItWorks': 'Cómo Funciona',
    'nav.formats': 'Formatos',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.support': 'Apoyar al Desarrollador',
    'theme.toggle': 'Cambiar tema',
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.system': 'Sistema',

    // Hero Section
    'hero.badge': '100% Privado con WebAssembly en el Cliente',
    'hero.title': 'Extrae Audio Cristalino de Cualquier Video',
    'hero.subtitle': 'Convierte MP4, WebM, MOV, MKV y AVI en MP3, WAV, AAC o M4A de alta fidelidad. Todo el procesamiento ocurre localmente en tu navegador sin subir nada a ningún servidor.',
    'hero.privacyPill': 'Tus archivos nunca salen de tu dispositivo',
    'hero.speedPill': 'Motor WASM con aceleración local',

    // Converter Workspace
    'dropzone.title': 'Arrastra y suelta tu archivo de video aquí',
    'dropzone.subtitle': 'o haz clic en cualquier lugar para explorar los archivos de tu equipo',
    'dropzone.active': 'Suelta el video aquí para comenzar...',
    'dropzone.formats': 'Compatible con MP4, WebM, MOV, MKV, AVI, FLV, WMV (Sin límite de tamaño)',
    'dropzone.btnBrowse': 'Seleccionar Archivo de Video',
    'dropzone.processingMeta': 'Analizando metadatos del video...',

    // File Preview Card
    'preview.title': 'Video Cargado',
    'preview.duration': 'Duración',
    'preview.size': 'Tamaño del archivo',
    'preview.change': 'Cambiar Video',
    'preview.remove': 'Eliminar',

    // Settings
    'settings.formatTitle': 'Seleccionar Formato de Audio de Salida',
    'settings.formatMp3Desc': 'Compatibilidad universal, equilibrio óptimo entre tamaño y calidad.',
    'settings.formatWavDesc': 'Audio sin comprimir y sin pérdida para edición profesional y producción.',
    'settings.formatAacDesc': 'Codificación avanzada de audio con compresión superior al MP3.',
    'settings.formatM4aDesc': 'Optimizado para el ecosistema Apple con contenedor AAC de alta calidad.',

    'settings.bitrateTitle': 'Tasa de Bits / Calidad de Audio',
    'settings.bitrate128': '128 kbps (Voz estándar / Podcast)',
    'settings.bitrate192': '192 kbps (Música de alta calidad)',
    'settings.bitrate256': '256 kbps (Calidad de estudio)',
    'settings.bitrate320': '320 kbps (Ultra HD Audiófilo)',
    'settings.bitrateLossless': 'PCM sin pérdida (16-bit 44.1kHz)',

    'settings.trimTitle': 'Recorte Opcional de Tiempo',
    'settings.trimEnable': 'Recortar fragmento específico',
    'settings.trimStart': 'Tiempo de inicio (s)',
    'settings.trimEnd': 'Tiempo de final (s)',

    // Action & Progress
    'action.extract': 'Extraer Audio Ahora',
    'action.converting': 'Extrayendo Audio...',
    'action.cancel': 'Cancelar Proceso',

    'status.init': 'Inicializando motor WebAssembly...',
    'status.loadingCore': 'Cargando núcleo FFmpeg.wasm en la memoria del navegador...',
    'status.writingFs': 'Leyendo datos binarios del video en el sistema de archivos virtual...',
    'status.processing': 'Desmultiplexando y codificando pista de audio...',
    'status.readingOutput': 'Generando archivo Blob de audio de alta fidelidad...',
    'status.cleanup': 'Liberando memoria virtual...',
    'status.complete': '¡Extracción completada con éxito! Listo para descargar.',

    // Result Card
    'result.title': '¡Extracción de Audio Exitosa!',
    'result.playPreview': 'Vista Previa del Audio',
    'result.originalSize': 'Tamaño del Video Original',
    'result.audioSize': 'Tamaño del Audio Extraído',
    'result.spaceSaved': 'Espacio Ahorrado',
    'result.downloadBtn': 'Descargar Archivo de Audio',
    'result.convertAnother': 'Convertir Otro Video',

    // Errors
    'error.title': 'Error de Procesamiento',
    'error.unsupported': 'Formato de video no compatible o archivo dañado. Elige otro archivo.',
    'error.ffmpegInit': 'No se pudo cargar el motor WebAssembly. Revisa tu conexión a internet o la compatibilidad de tu navegador.',
    'error.conversionFailed': 'Error al convertir la pista de audio. Es posible que el video no contenga audio.',
    'error.dismiss': 'Cerrar',

    // Features Section
    'features.badge': 'Por Qué Elegirnos',
    'features.title': 'Diseñado para Máxima Privacidad y Rendimiento Total',
    'features.subtitle': 'Los convertidores tradicionales suben tus videos personales a servidores remotos en la nube. Nuestra herramienta procesa todo localmente con WebAssembly.',
    
    'features.item1Title': '100% Privacidad en el Cliente',
    'features.item1Desc': 'Tus videos nunca tocan ningún servidor remoto. La extracción se ejecuta en la memoria de tu navegador.',
    
    'features.item2Title': 'Sin Límites de Tamaño',
    'features.item2Desc': 'Extrae audio de videos 4K de 500MB, 2GB o 10GB sin límites artificiales ni muros de pago.',
    
    'features.item3Title': 'Velocidad WASM en un Solo Hilo',
    'features.item3Desc': 'Potenciado por FFmpeg compilado a WebAssembly para decodificación eficiente y sin bloqueos.',
    
    'features.item4Title': 'Audio de Grado de Estudio (320 kbps)',
    'features.item4Desc': 'Elige entre MP3/AAC de 320kbps de máxima fidelidad o WAV PCM sin pérdida bit a bit.',
    
    'features.item5Title': 'Formatos de Video Populares',
    'features.item5Desc': 'Compatibilidad completa con contenedores MP4, WebM, QuickTime MOV, MKV, AVI, WMV y FLV.',
    
    'features.item6Title': 'Instantáneo y Siempre Gratis',
    'features.item6Desc': 'Sin registros, sin cuentas, sin tarjetas de crédito, sin marcas de agua y sin esperas en colas.',

    // How It Works
    'how.badge': 'Flujo Simple en 3 Pasos',
    'how.title': 'Cómo Extraer Audio de un Video Online',
    'how.subtitle': 'Sigue estos sencillos pasos para convertir cualquier video a audio en segundos sin subir nada.',
    'how.step1Title': '1. Selecciona o Arrastra tu Video',
    'how.step1Desc': 'Arrastra tu archivo de video al recuadro o haz clic para seleccionarlo desde tu dispositivo.',
    'how.step2Title': '2. Elige Formato y Calidad',
    'how.step2Desc': 'Selecciona tu formato preferido (MP3, WAV, AAC, M4A) y la tasa de bits deseada de hasta 320 kbps.',
    'how.step3Title': '3. Extrae y Descarga',
    'how.step3Desc': 'Haz clic en "Extraer Audio", previsualiza el audio en el reproductor integrado y guárdalo al instante.',

    // Format Matrix
    'matrix.badge': 'Formatos Compatibles',
    'matrix.title': 'Especificaciones de Formatos de Audio',
    'matrix.subtitle': 'Encuentra la combinación ideal de formato y tasa de bits para tus necesidades.',
    'matrix.colFormat': 'Formato',
    'matrix.colExtension': 'Extensión',
    'matrix.colType': 'Tipo de Audio',
    'matrix.colBitrate': 'Bitrate Máx',
    'matrix.colBestFor': 'Ideal Para',
    'matrix.mp3Best': 'Escucha diaria, smartphones, estéreos de coches, podcasts',
    'matrix.wavBest': 'Producción musical, edición de video, archivo de audio profesional',
    'matrix.aacBest': 'Streaming de alta eficiencia, dispositivos móviles, web moderna',
    'matrix.m4aBest': 'Apple Music, iTunes, dispositivos iOS, notas de voz de alta calidad',

    // FAQ Section
    'faq.badge': 'Preguntas Frecuentes',
    'faq.title': 'Todo lo que Necesitas Saber',
    'faq.subtitle': '¿Dudas sobre la conversión de video a audio en el cliente? Aquí tienes las respuestas.',
    
    'faq.q1': '¿Mi video se sube a algún servidor?',
    'faq.a1': 'No. A diferencia de los convertidores tradicionales, el 100% de la extracción y codificación ocurre dentro de tu navegador web usando WebAssembly (FFmpeg.wasm). Tus archivos nunca salen de tu equipo.',
    
    'faq.q2': '¿Existe algún límite de tamaño de archivo?',
    'faq.a2': 'No hay límites de servidor. Puedes procesar videos grandes (de varios gigabytes) siempre que tu dispositivo disponga de suficiente memoria RAM para procesar el archivo en el navegador.',
    
    'faq.q3': '¿Qué formatos de video son compatibles?',
    'faq.a3': 'Admitimos casi todos los formatos de video modernos incluyendo MP4 (.mp4), WebM (.webm), QuickTime (.mov), Matroska (.mkv), AVI (.avi), Windows Media (.wmv) y Flash Video (.flv).',
    
    'faq.q4': '¿Cuál es la calidad de audio más alta disponible?',
    'faq.a4': 'Puedes exportar audio sin comprimir ni pérdidas usando el formato WAV (16-bit PCM 44.1kHz), o MP3 y AAC de ultra alta definición a 320 kbps.',
    
    'faq.q5': '¿Funciona en teléfonos móviles y tablets?',
    'faq.a5': '¡Sí! Siempre que tu navegador móvil soporte WebAssembly (como Chrome, Safari, Firefox o Edge en iOS y Android), puedes extraer audio en tu teléfono.',
    
    'faq.q6': '¿Este servicio es completamente gratuito?',
    'faq.a6': 'Sí, 100% gratuito sin suscripciones ocultas, sin límites de uso, sin registros y sin marcas de agua en el audio.',

    // Footer
    'footer.description': 'Extractor de video a audio ultrarrápido y 100% del lado del cliente con WebAssembly. Diseñado para privacidad, fidelidad y simplicidad.',
    'footer.privacyNote': 'Cero telemetría de servidor. Todos los datos se procesan localmente.',
    'footer.allRights': 'Todos los derechos reservados.',
    'footer.disclaimer': 'Desarrollado con tecnología de código abierto FFmpeg WebAssembly.'
  },

  pt: {
    // SEO & Meta
    'site.title': 'Conversor de Vídeo para Áudio Grátis | Extrair MP3, WAV, AAC Online',
    'site.description': 'Converta vídeos para MP3, WAV, AAC e M4A diretamente no seu navegador. Processamento 100% privado no cliente via WebAssembly. Sem limites de tamanho, sem envio de arquivos.',
    'site.keywords': 'video para audio, video para mp3, extrair audio de video, mp4 para mp3, webm para wav, conversor local sem servidor, extrair som de video',
    
    // Header & Nav
    'nav.brand': 'VideoToAudio',
    'nav.brandTag': 'Studio',
    'nav.features': 'Recursos',
    'nav.howItWorks': 'Como Funciona',
    'nav.formats': 'Formatos',
    'nav.faq': 'Perguntas Frequentes',
    'nav.support': 'Apoiar o Desenvolvedor',
    'theme.toggle': 'Alternar tema',
    'theme.light': 'Claro',
    'theme.dark': 'Escuro',
    'theme.system': 'Sistema',

    // Hero Section
    'hero.badge': '100% Privado com WebAssembly no Cliente',
    'hero.title': 'Extraia Áudio Cristalino de Qualquer Vídeo',
    'hero.subtitle': 'Converta MP4, WebM, MOV, MKV e AVI em MP3, WAV, AAC ou M4A de alta fidelidade. Todo o processamento ocorre localmente no seu computador sem upload para servidores.',
    'hero.privacyPill': 'Seus arquivos nunca saem do seu dispositivo',
    'hero.speedPill': 'Motor WASM com aceleração local',

    // Converter Workspace
    'dropzone.title': 'Arraste e solte seu arquivo de vídeo aqui',
    'dropzone.subtitle': 'ou clique em qualquer lugar para selecionar arquivos do seu dispositivo',
    'dropzone.active': 'Solte o vídeo aqui para iniciar...',
    'dropzone.formats': 'Suporta MP4, WebM, MOV, MKV, AVI, FLV, WMV (Tamanho ilimitado)',
    'dropzone.btnBrowse': 'Selecionar Arquivo de Vídeo',
    'dropzone.processingMeta': 'Analisando metadados do vídeo...',

    // File Preview Card
    'preview.title': 'Vídeo Carregado',
    'preview.duration': 'Duração',
    'preview.size': 'Tamanho do arquivo',
    'preview.change': 'Trocar Vídeo',
    'preview.remove': 'Remover',

    // Settings
    'settings.formatTitle': 'Selecione o Formato de Áudio de Saída',
    'settings.formatMp3Desc': 'Compatibilidade universal, ótimo equilíbrio entre tamanho e qualidade.',
    'settings.formatWavDesc': 'Áudio sem perdas não comprimido para edição profissional e produção musical.',
    'settings.formatAacDesc': 'Codificação avançada com eficiência de compressão superior ao MP3.',
    'settings.formatM4aDesc': 'Otimizado para o ecossistema Apple com container AAC de alta qualidade.',

    'settings.bitrateTitle': 'Taxa de Bits / Predefinição de Qualidade',
    'settings.bitrate128': '128 kbps (Voz padrão / Podcast)',
    'settings.bitrate192': '192 kbps (Música de alta qualidade)',
    'settings.bitrate256': '256 kbps (Qualidade de estúdio)',
    'settings.bitrate320': '320 kbps (Ultra HD Audiófilo)',
    'settings.bitrateLossless': 'PCM sem perdas (16-bit 44.1kHz)',

    'settings.trimTitle': 'Corte Opcional de Tempo',
    'settings.trimEnable': 'Cortar trecho específico',
    'settings.trimStart': 'Tempo inicial (s)',
    'settings.trimEnd': 'Tempo final (s)',

    // Action & Progress
    'action.extract': 'Extrair Áudio Agora',
    'action.converting': 'Extraindo Áudio...',
    'action.cancel': 'Cancelar Processo',

    'status.init': 'Inicializando motor WebAssembly...',
    'status.loadingCore': 'Carregando núcleo FFmpeg.wasm na memória do navegador...',
    'status.writingFs': 'Lendo dados binários do vídeo no sistema de arquivos virtual...',
    'status.processing': 'Demultiplexando e codificando fluxo de áudio...',
    'status.readingOutput': 'Gerando arquivo Blob de áudio...',
    'status.cleanup': 'Liberando alocações de memória virtual...',
    'status.complete': 'Extração concluída com sucesso! Pronto para download.',

    // Result Card
    'result.title': 'Áudio Extraído com Sucesso!',
    'result.playPreview': 'Pré-visualização do Áudio',
    'result.originalSize': 'Tamanho do Vídeo Original',
    'result.audioSize': 'Tamanho do Áudio Extraído',
    'result.spaceSaved': 'Espaço Economizado',
    'result.downloadBtn': 'Baixar Arquivo de Áudio',
    'result.convertAnother': 'Converter Outro Vídeo',

    // Errors
    'error.title': 'Erro de Processamento',
    'error.unsupported': 'Formato de vídeo não suportado ou arquivo corrompido. Escolha outro arquivo.',
    'error.ffmpegInit': 'Falha ao carregar o motor WebAssembly. Verifique sua conexão à internet ou compatibilidade do navegador.',
    'error.conversionFailed': 'Falha ao converter o fluxo de áudio. O vídeo pode não conter faixa de áudio.',
    'error.dismiss': 'Fechar',

    // Features Section
    'features.badge': 'Por Que Nos Escolher',
    'features.title': 'Criado para Privacidade Absoluta e Alto Desempenho',
    'features.subtitle': 'Conversores tradicionais enviam seus vídeos pessoais para servidores remotos. Nossa ferramenta executa 100% no seu navegador com WebAssembly.',
    
    'features.item1Title': '100% de Privacidade no Cliente',
    'features.item1Desc': 'Seus vídeos nunca tocam nenhum servidor remoto. A extração é feita localmente na memória do seu navegador.',
    
    'features.item2Title': 'Sem Limites de Tamanho',
    'features.item2Desc': 'Extraia áudio de vídeos 4K de 500MB, 2GB ou 10GB sem limites artificiais de upload nem cobranças.',
    
    'features.item3Title': 'Velocidade WASM Otimizada',
    'features.item3Desc': 'Alimentado por FFmpeg compilado para WebAssembly para decodificação rápida e confiável.',
    
    'features.item4Title': 'Áudio com Qualidade de Estúdio (320 kbps)',
    'features.item4Desc': 'Escolha entre MP3/AAC de 320kbps de altíssima fidelidade ou WAV PCM sem perdas.',
    
    'features.item5Title': 'Formatos de Vídeo Populares',
    'features.item5Desc': 'Suporte completo para formatos MP4, WebM, QuickTime MOV, MKV, AVI, WMV e FLV.',
    
    'features.item6Title': 'Instantâneo e Sempre Grátis',
    'features.item6Desc': 'Sem cadastro, sem contas, sem cartão de crédito, sem marcas d’água e sem filas de espera.',

    // How It Works
    'how.badge': 'Fluxo Simples em 3 Passos',
    'how.title': 'Como Extrair Áudio de Vídeo Online',
    'how.subtitle': 'Siga estes passos fáceis para converter qualquer arquivo de vídeo em áudio em poucos segundos.',
    'how.step1Title': '1. Selecione ou Arraste seu Vídeo',
    'how.step1Desc': 'Arraste o arquivo de vídeo para a área do conversor ou clique para selecionar do seu dispositivo.',
    'how.step2Title': '2. Escolha o Formato e Qualidade',
    'how.step2Desc': 'Selecione o formato desejado (MP3, WAV, AAC, M4A) e defina a taxa de bits de até 320 kbps.',
    'how.step3Title': '3. Extraia e Baixe',
    'how.step3Desc': 'Clique em "Extrair Áudio", ouça a prévia no reprodutor integrado e baixe seu arquivo de áudio.',

    // Format Matrix
    'matrix.badge': 'Formatos Suportados',
    'matrix.title': 'Especificações dos Formatos de Áudio',
    'matrix.subtitle': 'Encontre a combinação ideal de formato e taxa de bits para seu objetivo.',
    'matrix.colFormat': 'Formato',
    'matrix.colExtension': 'Extensão',
    'matrix.colType': 'Tipo de Áudio',
    'matrix.colBitrate': 'Bitrate Máx',
    'matrix.colBestFor': 'Melhor Para',
    'matrix.mp3Best': 'Uso diário, smartphones, sons automotivos, podcasts',
    'matrix.wavBest': 'Produção musical, edição de vídeo, arquivamento de estúdio',
    'matrix.aacBest': 'Transmissão eficiente, dispositivos móveis, web moderna',
    'matrix.m4aBest': 'Apple Music, iTunes, dispositivos iOS, gravações de alta qualidade',

    // FAQ Section
    'faq.badge': 'Perguntas Frequentes',
    'faq.title': 'Tudo o que Você Precisa Saber',
    'faq.subtitle': 'Dúvidas sobre a conversão de vídeo para áudio no navegador? Confira as respostas.',
    
    'faq.q1': 'Meu vídeo é enviado para algum servidor?',
    'faq.a1': 'Não. Ao contrário dos conversores tradicionais, 100% da extração e codificação ocorrem no seu navegador usando WebAssembly (FFmpeg.wasm). Seus vídeos nunca saem do seu computador ou smartphone.',
    
    'faq.q2': 'Existe limite de tamanho de arquivo?',
    'faq.a2': 'Não há limites de servidor. Você pode processar arquivos grandes de vários gigabytes desde que seu aparelho tenha memória RAM suficiente no navegador.',
    
    'faq.q3': 'Quais formatos de vídeo são suportados?',
    'faq.a3': 'Suportamos praticamente todos os formatos modernos de vídeo: MP4 (.mp4), WebM (.webm), QuickTime (.mov), Matroska (.mkv), AVI (.avi), Windows Media (.wmv) e Flash Video (.flv).',
    
    'faq.q4': 'Qual é a maior qualidade de áudio disponível?',
    'faq.a4': 'Você pode exportar áudio não comprimido e sem perdas em formato WAV (16-bit PCM 44.1kHz), ou MP3 e AAC em ultra alta definição a 320 kbps.',
    
    'faq.q5': 'Funciona em celulares e tablets?',
    'faq.a5': 'Sim! Desde que o navegador do seu celular tenha suporte a WebAssembly (como Chrome, Safari, Firefox ou Edge no iOS e Android), você pode extrair áudio diretamente no celular.',
    
    'faq.q6': 'Este serviço é totalmente gratuito?',
    'faq.a6': 'Sim, 100% gratuito sem cobranças ocultas, sem limites de uso, sem necessidade de cadastro e sem marcas d’água.',

    // Footer
    'footer.description': 'Extrator de vídeo para áudio ultrarrápido e 100% local com WebAssembly. Projetado para privacidade, fidelidade e facilidade.',
    'footer.privacyNote': 'Zero telemetria em servidores. Todos os dados são processados localmente.',
    'footer.allRights': 'Todos os direitos reservados.',
    'footer.disclaimer': 'Desenvolvido com tecnologia de código aberto FFmpeg WebAssembly.'
  },

  de: {
    // SEO & Meta
    'site.title': 'Kostenloser Video zu Audio Konverter | MP3, WAV, AAC Online Extrahieren',
    'site.description': 'Konvertieren Sie Videos direkt im Browser zu MP3, WAV, AAC und M4A. 100% private clientseitige Verarbeitung mit WebAssembly. Keine Dateilimits, keine Server-Uploads.',
    'site.keywords': 'video zu audio, video in mp3, audio aus video extrahieren, mp4 zu mp3, webm zu wav, lokaler konverter ohne server, mp3 extraktor online',
    
    // Header & Nav
    'nav.brand': 'VideoToAudio',
    'nav.brandTag': 'Studio',
    'nav.features': 'Funktionen',
    'nav.howItWorks': 'Anleitung',
    'nav.formats': 'Formate',
    'nav.faq': 'FAQ',
    'nav.support': 'Entwickler Unterstützen',
    'theme.toggle': 'Design umschalten',
    'theme.light': 'Hell',
    'theme.dark': 'Dunkel',
    'theme.system': 'System',

    // Hero Section
    'hero.badge': '100% Private Client-Side WebAssembly',
    'hero.title': 'Kristallklares Audio aus jedem Video extrahieren',
    'hero.subtitle': 'Konvertieren Sie MP4, WebM, MOV, MKV und AVI in hochauflösendes MP3, WAV, AAC oder M4A. Die gesamte Verarbeitung erfolgt lokal auf Ihrem Gerät - keine Uploads, keine Warteschlangen.',
    'hero.privacyPill': 'Ihre Dateien verlassen niemals Ihr Gerät',
    'hero.speedPill': 'Hardwarebeschleunigte WASM-Engine',

    // Converter Workspace
    'dropzone.title': 'Videodatei hierher ziehen und ablegen',
    'dropzone.subtitle': 'oder überall klicken, um Dateien auf Ihrem Gerät auszuwählen',
    'dropzone.active': 'Videodatei hier ablegen...',
    'dropzone.formats': 'Unterstützt MP4, WebM, MOV, MKV, AVI, FLV, WMV (Unbegrenzte Größe)',
    'dropzone.btnBrowse': 'Videodatei Auswählen',
    'dropzone.processingMeta': 'Video-Metadaten werden analysiert...',

    // File Preview Card
    'preview.title': 'Geladenes Video',
    'preview.duration': 'Dauer',
    'preview.size': 'Dateigröße',
    'preview.change': 'Anderes Video',
    'preview.remove': 'Entfernen',

    // Settings
    'settings.formatTitle': 'Audio-Ausgabeformat Auswählen',
    'settings.formatMp3Desc': 'Universelle Kompatibilität, hervorragende Balance zwischen Größe und Qualität.',
    'settings.formatWavDesc': 'Verlustfreies, unkomprimiertes Audio für professionelle Bearbeitung und Studio-Mastering.',
    'settings.formatAacDesc': 'Moderne Audiocodierung mit überlegener Kompressionseffizienz gegenüber MP3.',
    'settings.formatM4aDesc': 'Optimiert für das Apple-Ökosystem mit hochwertigem AAC-Container.',

    'settings.bitrateTitle': 'Audio-Bitrate / Qualitätsstufe',
    'settings.bitrate128': '128 kbps (Standard Sprache / Podcast)',
    'settings.bitrate192': '192 kbps (Hohe Musikqualität)',
    'settings.bitrate256': '256 kbps (Studioqualität)',
    'settings.bitrate320': '320 kbps (Ultra HD Audiophil)',
    'settings.bitrateLossless': 'Verlustfreies PCM (16-bit 44.1kHz)',

    'settings.trimTitle': 'Optionale Zeittrimmung',
    'settings.trimEnable': 'Bestimmten Abschnitt zuschneiden',
    'settings.trimStart': 'Startzeit (Sek.)',
    'settings.trimEnd': 'Endzeit (Sek.)',

    // Action & Progress
    'action.extract': 'Audio Jetzt Extrahieren',
    'action.converting': 'Audio wird extrahiert...',
    'action.cancel': 'Vorgang Abbrechen',

    'status.init': 'WebAssembly-Engine wird initialisiert...',
    'status.loadingCore': 'FFmpeg.wasm-Kern wird in den Browserspeicher geladen...',
    'status.writingFs': 'Videodaten werden in das virtuelle Dateisystem geschrieben...',
    'status.processing': 'Audiostream wird dekodiert und encodiert...',
    'status.readingOutput': 'Audiodatei wird im Speicher erstellt...',
    'status.cleanup': 'Virtueller Speicher wird freigegeben...',
    'status.complete': 'Extraktion erfolgreich abgeschlossen! Bereit zum Download.',

    // Result Card
    'result.title': 'Audio Erfolgreich Extrahiert!',
    'result.playPreview': 'Audio-Vorschau',
    'result.originalSize': 'Originale Videogröße',
    'result.audioSize': 'Extrahierte Audiogröße',
    'result.spaceSaved': 'Gesparter Speicherplatz',
    'result.downloadBtn': 'Audiodatei Herunterladen',
    'result.convertAnother': 'Weiteres Video Konvertieren',

    // Errors
    'error.title': 'Verarbeitungsfehler',
    'error.unsupported': 'Nicht unterstütztes Format oder beschädigte Datei. Bitte wählen Sie eine andere Datei.',
    'error.ffmpegInit': 'WebAssembly-Engine konnte nicht geladen werden. Bitte Internetverbindung oder Browserunterstützung prüfen.',
    'error.conversionFailed': 'Fehler beim Konvertieren des Audiostreams. Die Datei enthält möglicherweise keine Tonspur.',
    'error.dismiss': 'Schließen',

    // Features Section
    'features.badge': 'Ihre Vorteile',
    'features.title': 'Entwickelt für Absolute Privatsphäre & Höchstleistung',
    'features.subtitle': 'Herkömmliche Online-Konverter laden Ihre privaten Videos auf fremde Server hoch. Unser Tool arbeitet zu 100% lokal in Ihrem Browser via WebAssembly.',
    
    'features.item1Title': '100% Lokaler Datenschutz',
    'features.item1Desc': 'Ihre Videos werden niemals an externe Server übertragen. Die Extraktion findet im lokalen Browserspeicher statt.',
    
    'features.item2Title': 'Keine Dateigrößenbegrenzung',
    'features.item2Desc': 'Extrahieren Sie Audio aus 500MB, 2GB oder 10GB 4K-Videos ohne Upload-Limits oder Bezahlschranken.',
    
    'features.item3Title': 'Single-Threaded WASM Geschwindigkeit',
    'features.item3Desc': 'Angetrieben von FFmpeg als WebAssembly für zuverlässiges und ressourcenschonendes Decoding.',
    
    'features.item4Title': 'Studio-Audioqualität (320 kbps)',
    'features.item4Desc': 'Wählen Sie zwischen 320 kbps MP3/AAC oder verlustfreiem 16-Bit WAV PCM-Output.',
    
    'features.item5Title': 'Alle Gängigen Videoformate',
    'features.item5Desc': 'Unterstützt MP4, WebM, QuickTime MOV, MKV, AVI, WMV und FLV ohne Konvertierungsverlust.',
    
    'features.item6Title': 'Sofort & Dauerhaft Kostenlos',
    'features.item6Desc': 'Ohne Anmeldung, ohne Abos, ohne Wasserzeichen und ohne lästige Wartezeiten.',

    // How It Works
    'how.badge': 'Einfacher 3-Schritte-Ablauf',
    'how.title': 'So Extrahieren Sie Audio aus Videos Online',
    'how.subtitle': 'Befolgen Sie diese einfachen Schritte, um jedes Video in wenigen Sekunden lokal zu konvertieren.',
    'how.step1Title': '1. Video Auswählen oder Ablegen',
    'how.step1Desc': 'Ziehen Sie Ihre Videodatei in das Konverterfeld oder wählen Sie sie von Ihrem Gerät aus.',
    'how.step2Title': '2. Format & Qualität Wählen',
    'how.step2Desc': 'Wählen Sie das gewünschte Format (MP3, WAV, AAC, M4A) und die Bitrate bis zu 320 kbps.',
    'how.step3Title': '3. Extrahieren & Herunterladen',
    'how.step3Desc': 'Klicken Sie auf "Audio Extrahieren", hören Sie die Vorschau an und laden Sie die Datei herunter.',

    // Format Matrix
    'matrix.badge': 'Unterstützte Formate',
    'matrix.title': 'Audio-Formatspezifikationen',
    'matrix.subtitle': 'Finden Sie die perfekte Kombination aus Format und Bitrate für Ihre Anforderungen.',
    'matrix.colFormat': 'Format',
    'matrix.colExtension': 'Endung',
    'matrix.colType': 'Audiotyp',
    'matrix.colBitrate': 'Max. Bitrate',
    'matrix.colBestFor': 'Ideal Für',
    'matrix.mp3Best': 'Alltägliche Wiedergabe, Smartphones, Autoradios, Podcasts',
    'matrix.wavBest': 'Musikproduktion, Videoschnitt, professionelle Audioarchivierung',
    'matrix.aacBest': 'Effizientes Streaming, Mobilgeräte, modernes Web-Playback',
    'matrix.m4aBest': 'Apple Music, iTunes, iOS-Geräte, hochqualitative Sprachaufnahmen',

    // FAQ Section
    'faq.badge': 'Häufig Gestellte Fragen',
    'faq.title': 'Wichtige Fragen & Antworten',
    'faq.subtitle': 'Haben Sie Fragen zur lokalen Video-zu-Audio-Konvertierung? Hier finden Sie alle Antworten.',
    
    'faq.q1': 'Wird mein Video auf Ihre Server hochgeladen?',
    'faq.a1': 'Nein. Im Gegensatz zu herkömmlichen Konvertern erfolgt 100% der Extraktion direkt in Ihrem Browser mittels WebAssembly (FFmpeg.wasm). Ihre Dateien verlassen Ihr Gerät zu keinem Zeitpunkt.',
    
    'faq.q2': 'Gibt es eine Beschränkung der Dateigröße?',
    'faq.a2': 'Es gibt keine künstlichen Server-Limits. Sie können auch große Videos mit mehreren Gigabyte verarbeiten, sofern Ihr Gerät über ausreichend freien Arbeitsspeicher verfügt.',
    
    'faq.q3': 'Welche Videoformate werden unterstützt?',
    'faq.a3': 'Wir unterstützen praktisch alle modernen Formate: MP4 (.mp4), WebM (.webm), QuickTime (.mov), Matroska (.mkv), AVI (.avi), Windows Media (.wmv) und Flash Video (.flv).',
    
    'faq.q4': 'Was ist die höchste verfügbare Audioqualität?',
    'faq.a4': 'Sie können verlustfreies, unkomprimiertes Audio im WAV-Format (16-Bit PCM 44.1kHz) oder hochauflösendes MP3 und AAC mit 320 kbps Bitrate exportieren.',
    
    'faq.q5': 'Funktioniert das auch auf Smartphones und Tablets?',
    'faq.a5': 'Ja! Jeder moderne mobile Browser mit WebAssembly-Unterstützung (wie Chrome, Safari, Firefox oder Edge auf iOS und Android) kann Audio direkt umwandeln.',
    
    'faq.q6': 'Ist dieser Dienst wirklich kostenlos?',
    'faq.a6': 'Ja, 100% kostenlos ohne versteckte Kosten, ohne Nutzungslimits, ohne Registrierungspflicht und ohne Wasserzeichen.',

    // Footer
    'footer.description': 'Ultraschneller, 100% clientseitiger Video-zu-Audio-Extraktor mit WebAssembly. Höchste Privatsphäre, Qualität und Einfachheit.',
    'footer.privacyNote': 'Keine Server-Telemetrie. Alle Daten verbleiben lokal auf Ihrem Gerät.',
    'footer.allRights': 'Alle Rechte vorbehalten.',
    'footer.disclaimer': 'Basierend auf Open-Source FFmpeg WebAssembly Technologie.'
  },

  fr: {
    // SEO & Meta
    'site.title': 'Convertisseur Vidéo en Audio Gratuit | Extraire MP3, WAV, AAC en Ligne',
    'site.description': 'Convertissez vos vidéos en MP3, WAV, AAC et M4A directement dans votre navigateur. Traitement 100% privé côté client avec WebAssembly. Sans limite de taille, sans téléversement.',
    'site.keywords': 'video en audio, video en mp3, extraire audio video, mp4 en mp3, webm en wav, convertisseur sans serveur, extraire son de video gratuit',
    
    // Header & Nav
    'nav.brand': 'VideoToAudio',
    'nav.brandTag': 'Studio',
    'nav.features': 'Fonctionnalités',
    'nav.howItWorks': 'Comment Ça Marche',
    'nav.formats': 'Formats',
    'nav.faq': 'FAQ',
    'nav.support': 'Soutenir le Développeur',
    'theme.toggle': 'Changer de thème',
    'theme.light': 'Clair',
    'theme.dark': 'Sombre',
    'theme.system': 'Système',

    // Hero Section
    'hero.badge': '100% Privé avec WebAssembly Côté Client',
    'hero.title': 'Extrayez un Son Cristallin de N’importe Quelle Vidéo',
    'hero.subtitle': 'Convertissez MP4, WebM, MOV, MKV et AVI en MP3, WAV, AAC ou M4A haute fidélité. L’intégralité du traitement s’effectue localement sans aucun envoi vers un serveur.',
    'hero.privacyPill': 'Vos fichiers ne quittent jamais votre appareil',
    'hero.speedPill': 'Moteur WASM accéléré localement',

    // Converter Workspace
    'dropzone.title': 'Glissez et déposez votre fichier vidéo ici',
    'dropzone.subtitle': 'ou cliquez n’importe où pour parcourir les fichiers de votre appareil',
    'dropzone.active': 'Déposez le fichier vidéo ici...',
    'dropzone.formats': 'Prend en charge MP4, WebM, MOV, MKV, AVI, FLV, WMV (Taille illimitée)',
    'dropzone.btnBrowse': 'Sélectionner un Fichier Vidéo',
    'dropzone.processingMeta': 'Analyse des métadonnées vidéo...',

    // File Preview Card
    'preview.title': 'Vidéo Chargée',
    'preview.duration': 'Durée',
    'preview.size': 'Taille du fichier',
    'preview.change': 'Changer de Vidéo',
    'preview.remove': 'Supprimer',

    // Settings
    'settings.formatTitle': 'Sélectionnez le Format Audio de Sortie',
    'settings.formatMp3Desc': 'Compatibilité universelle, parfait compromis entre taille et clarté.',
    'settings.formatWavDesc': 'Audio sans perte et non compressé pour le montage professionnel et la musique.',
    'settings.formatAacDesc': 'Encodage audio avancé avec une meilleure efficacité de compression que le MP3.',
    'settings.formatM4aDesc': 'Optimisé pour l’écosystème Apple avec conteneur AAC de haute qualité.',

    'settings.bitrateTitle': 'Débit Binaire / Qualité Audio',
    'settings.bitrate128': '128 kbps (Voix standard / Podcast)',
    'settings.bitrate192': '192 kbps (Haute qualité musicale)',
    'settings.bitrate256': '256 kbps (Qualité studio)',
    'settings.bitrate320': '320 kbps (Ultra HD Audiophile)',
    'settings.bitrateLossless': 'PCM sans perte (16-bit 44.1kHz)',

    'settings.trimTitle': 'Découpage Temporel Optionnel',
    'settings.trimEnable': 'Découper un extrait précis',
    'settings.trimStart': 'Début (s)',
    'settings.trimEnd': 'Fin (s)',

    // Action & Progress
    'action.extract': 'Extraire l’Audio Maintenant',
    'action.converting': 'Extraction de l’audio...',
    'action.cancel': 'Annuler le Processus',

    'status.init': 'Initialisation du moteur WebAssembly...',
    'status.loadingCore': 'Chargement du noyau FFmpeg.wasm dans la mémoire du navigateur...',
    'status.writingFs': 'Écriture des données vidéo dans le système de fichiers virtuel...',
    'status.processing': 'Démultiplexage et encodage du flux audio...',
    'status.readingOutput': 'Génération du fichier audio Blob...',
    'status.cleanup': 'Libération de la mémoire virtuelle...',
    'status.complete': 'Extraction terminée avec succès ! Prêt pour le téléchargement.',

    // Result Card
    'result.title': 'Extraction Audio Réussie !',
    'result.playPreview': 'Aperçu Audio',
    'result.originalSize': 'Taille Vidéo d’Origine',
    'result.audioSize': 'Taille Audio Extrait',
    'result.spaceSaved': 'Espace Économisé',
    'result.downloadBtn': 'Télécharger le Fichier Audio',
    'result.convertAnother': 'Convertir une Autre Vidéo',

    // Errors
    'error.title': 'Erreur de Traitement',
    'error.unsupported': 'Format vidéo non pris en charge ou fichier corrompu. Veuillez choisir un autre fichier.',
    'error.ffmpegInit': 'Impossible de charger le moteur WebAssembly. Vérifiez votre connexion Internet ou la compatibilité de votre navigateur.',
    'error.conversionFailed': 'Échec de la conversion de la piste audio. La vidéo ne contient peut-être pas de son.',
    'error.dismiss': 'Fermer',

    // Features Section
    'features.badge': 'Pourquoi Nous Choisir',
    'features.title': 'Conçu pour une Confidentialité Totale et une Performance Maximale',
    'features.subtitle': 'Les convertisseurs traditionnels envoient vos vidéos personnelles vers des serveurs distants. Notre outil s’exécute à 100% dans votre navigateur via WebAssembly.',
    
    'features.item1Title': '100% Privé Côté Client',
    'features.item1Desc': 'Vos vidéos ne transitent par aucun serveur externe. L’extraction s’effectue dans la mémoire locale de votre navigateur.',
    
    'features.item2Title': 'Aucune Limite de Taille',
    'features.item2Desc': 'Extrayez le son de vidéos 4K de 500Mo, 2Go ou 10Go sans limitation de taille ni abonnement payant.',
    
    'features.item3Title': 'Vitesse WASM Monothread',
    'features.item3Desc': 'Propulsé par FFmpeg compilé en WebAssembly pour un décodage fluide et économe en ressources.',
    
    'features.item4Title': 'Audio Qualité Studio (320 kbps)',
    'features.item4Desc': 'Choisissez entre MP3/AAC 320 kbps ultra haute définition ou WAV PCM sans perte bit à bit.',
    
    'features.item5Title': 'Tous Formats Vidéo Courants',
    'features.item5Desc': 'Prise en charge complète des conteneurs MP4, WebM, QuickTime MOV, MKV, AVI, WMV et FLV.',
    
    'features.item6Title': 'Instantané et Toujours Gratuit',
    'features.item6Desc': 'Sans inscription, sans compte, sans carte de crédit, sans filigrane et sans attente.',

    // How It Works
    'how.badge': 'Processus Simple en 3 Étapes',
    'how.title': 'Comment Extraire l’Audio d’une Vidéo en Ligne',
    'how.subtitle': 'Suivez ces étapes simples pour convertir n’importe quel fichier vidéo en audio en quelques secondes.',
    'how.step1Title': '1. Sélectionnez ou Déposez Votre Vidéo',
    'how.step1Desc': 'Glissez votre fichier vidéo dans la zone ou cliquez pour le sélectionner depuis votre appareil.',
    'how.step2Title': '2. Choisissez Format & Qualité',
    'how.step2Desc': 'Sélectionnez le format audio désiré (MP3, WAV, AAC, M4A) et le débit binaire jusqu’à 320 kbps.',
    'how.step3Title': '3. Extrayez & Téléchargez',
    'how.step3Desc': 'Cliquez sur "Extraire l’Audio", écoutez l’extrait dans le lecteur intégré et téléchargez votre fichier.',

    // Format Matrix
    'matrix.badge': 'Formats Pris en Charge',
    'matrix.title': 'Spécifications des Formats Audio',
    'matrix.subtitle': 'Trouvez la combinaison idéale de format et de débit pour vos besoins audio.',
    'matrix.colFormat': 'Format',
    'matrix.colExtension': 'Extension',
    'matrix.colType': 'Type Audio',
    'matrix.colBitrate': 'Débit Max',
    'matrix.colBestFor': 'Idéal Pour',
    'matrix.mp3Best': 'Écoute quotidienne, smartphones, autoradios, podcasts',
    'matrix.wavBest': 'Production musicale, montage vidéo pro, archivage sonore',
    'matrix.aacBest': 'Diffusion streaming efficace, appareils mobiles, web moderne',
    'matrix.m4aBest': 'Apple Music, iTunes, appareils iOS, enregistrements vocaux HD',

    // FAQ Section
    'faq.badge': 'Questions Fréquemment Posées',
    'faq.title': 'Tout Ce Que Vous Devez Savoir',
    'faq.subtitle': 'Des questions sur l’extraction audio locale dans le navigateur ? Voici nos réponses.',
    
    'faq.q1': 'Ma vidéo est-elle envoyée sur vos serveurs ?',
    'faq.a1': 'Non. Contrairement aux convertisseurs en ligne classiques, 100% de l’extraction et de l’encodage s’effectuent directement dans votre navigateur avec WebAssembly (FFmpeg.wasm). Vos fichiers ne quittent jamais votre appareil.',
    
    'faq.q2': 'Y a-t-il une limite de taille de fichier ?',
    'faq.a2': 'Il n’y a aucune limite de serveur. Vous pouvez traiter des vidéos de plusieurs gigaoctets tant que votre appareil dispose de suffisamment de mémoire vive (RAM).',
    
    'faq.q3': 'Quels formats vidéo sont pris en charge ?',
    'faq.a3': 'Nous prenons en charge la totalité des formats vidéo récents : MP4 (.mp4), WebM (.webm), QuickTime (.mov), Matroska (.mkv), AVI (.avi), Windows Media (.wmv) et Flash Video (.flv).',
    
    'faq.q4': 'Quelle est la qualité audio maximale disponible ?',
    'faq.a4': 'Vous pouvez exporter de l’audio non compressé et sans perte en WAV (16-bit PCM 44.1kHz) ou du MP3 et AAC ultra haute définition à 320 kbps.',
    
    'faq.q5': 'Est-ce compatible avec les smartphones et tablettes ?',
    'faq.a5': 'Oui ! Tout navigateur mobile supportant WebAssembly (comme Chrome, Safari, Firefox ou Edge sur iOS et Android) peut extraire l’audio directement.',
    
    'faq.q6': 'Ce service est-il entièrement gratuit ?',
    'faq.a6': 'Oui, 100% gratuit sans abonnement caché, sans limitation d’utilisation, sans création de compte et sans filigrane.',

    // Footer
    'footer.description': 'Extracteur vidéo en audio ultrarapide et 100% côté client avec WebAssembly. Conçu pour la confidentialité, la fidélité et la simplicité.',
    'footer.privacyNote': 'Zéro télémétrie serveur. Toutes les données sont traitées localement.',
    'footer.allRights': 'Tous droits réservés.',
    'footer.disclaimer': 'Propulsé par la technologie open-source FFmpeg WebAssembly.'
  },

  ja: {
    // SEO & Meta
    'site.title': '無料 動画音声抽出コンバーター | MP3・WAV・AAC 抽出オンライン',
    'site.description': 'ブラウザ上で動画をMP3、WAV、AAC、M4Aに直接変換。WebAssemblyによる100%クライアントサイド処理で完全プライベート。ファイルサイズ無制限、サーバー送信なし。',
    'site.keywords': '動画 音声 抽出, 動画 mp3 変換, mp4 mp3 変換, webm wav 変換, クライアントサイド 変換, サーバー不要 音声抽出, 無料 オンライン 音声変換',
    
    // Header & Nav
    'nav.brand': 'VideoToAudio',
    'nav.brandTag': 'Studio',
    'nav.features': '特徴',
    'nav.howItWorks': '使い方',
    'nav.formats': '対応フォーマット',
    'nav.faq': 'よくある質問',
    'nav.support': '開発者を支援',
    'theme.toggle': 'テーマ切替',
    'theme.light': 'ライト',
    'theme.dark': 'ダーク',
    'theme.system': 'システム',

    // Hero Section
    'hero.badge': '100% 完全ローカル WebAssembly 処理',
    'hero.title': 'あらゆる動画から最高音質の音声を抽出',
    'hero.subtitle': 'MP4、WebM、MOV、MKV、AVI動画を高品質なMP3、WAV、AAC、M4Aに瞬時に変換。すべての処理はお使いの端末内で完結し、サーバーへの動画送信は一切ありません。',
    'hero.privacyPill': 'ファイルは端末の外に出ません',
    'hero.speedPill': 'ハードウェア最適化 WASM エンジン',

    // Converter Workspace
    'dropzone.title': 'ここに動画ファイルをドラッグ＆ドロップ',
    'dropzone.subtitle': 'またはクリックして端末から動画ファイルを選択',
    'dropzone.active': '動画ファイルをドロップして開始...',
    'dropzone.formats': 'MP4, WebM, MOV, MKV, AVI, FLV, WMV 対応 (ファイル容量無制限)',
    'dropzone.btnBrowse': '動画ファイルを選択',
    'dropzone.processingMeta': '動画メタデータを解析中...',

    // File Preview Card
    'preview.title': '読み込み済み動画',
    'preview.duration': '再生時間',
    'preview.size': 'ファイルサイズ',
    'preview.change': '動画を変更',
    'preview.remove': '削除',

    // Settings
    'settings.formatTitle': '出力音声フォーマットを選択',
    'settings.formatMp3Desc': '万能な互換性。ファイルサイズと音質のバランスが優れています。',
    'settings.formatWavDesc': 'プロの編集や音楽制作に適した非圧縮・ロスレス音質。',
    'settings.formatAacDesc': 'MP3よりも高い圧縮効率を誇る次世代オーディオ規格。',
    'settings.formatM4aDesc': 'Apple機器に最適化された高音質AACコンテナ形式。',

    'settings.bitrateTitle': 'ビットレート / 音質プリセット',
    'settings.bitrate128': '128 kbps (標準・会話/ポッドキャスト向け)',
    'settings.bitrate192': '192 kbps (高音質・音楽向け)',
    'settings.bitrate256': '256 kbps (スタジオ品質)',
    'settings.bitrate320': '320 kbps (最高峰 Ultra HD オーディオマニア仕様)',
    'settings.bitrateLossless': '可逆圧縮 PCM (16-bit 44.1kHz)',

    'settings.trimTitle': '時間トリミング（任意）',
    'settings.trimEnable': '特定の区間のみ抽出',
    'settings.trimStart': '開始位置 (秒)',
    'settings.trimEnd': '終了位置 (秒)',

    // Action & Progress
    'action.extract': '音声を抽出する',
    'action.converting': '音声を抽出・変換中...',
    'action.cancel': '処理を中止',

    'status.init': 'WebAssemblyエンジンを初期化中...',
    'status.loadingCore': 'ブラウザメモリにFFmpeg.wasmコアを読み込み中...',
    'status.writingFs': '仮想ファイルシステムに動画バイナリを展開中...',
    'status.processing': '音声ストリームの分離およびエンコード中...',
    'status.readingOutput': '高音質オーディオBlobを生成中...',
    'status.cleanup': '仮想メモリを解放中...',
    'status.complete': '音声の抽出が完了しました！ダウンロード可能です。',

    // Result Card
    'result.title': '音声の抽出に成功しました！',
    'result.playPreview': '音声プレビュー再生',
    'result.originalSize': '元の動画サイズ',
    'result.audioSize': '抽出後の音声サイズ',
    'result.spaceSaved': '削減された容量',
    'result.downloadBtn': '音声ファイルをダウンロード',
    'result.convertAnother': '別の動画を変換する',

    // Errors
    'error.title': '処理エラー',
    'error.unsupported': 'サポートされていない動画形式か、破損したファイルです。別のファイルをお試しください。',
    'error.ffmpegInit': 'WebAssemblyエンジンの読み込みに失敗しました。通信環境やブラウザの対応状況をご確認ください。',
    'error.conversionFailed': '音声の変換に失敗しました。動画に音声トラックが含まれていない可能性があります。',
    'error.dismiss': '閉じる',

    // Features Section
    'features.badge': '選ばれる理由',
    'features.title': '絶対的なプライバシー保護と圧倒的なパフォーマンス',
    'features.subtitle': '従来のオンライン変換ツールは動画を外部サーバーへアップロードしますが、当ツールは最新のWebAssemblyにより100%ブラウザ内部で安全に動作します。',
    
    'features.item1Title': '100% クライアントサイド プライバシー',
    'features.item1Desc': '動画ファイルが外部サーバーに送信されることはありません。すべてお使いのブラウザメモリ内で完結します。',
    
    'features.item2Title': 'ファイルサイズ上限なし',
    'features.item2Desc': '500MB、2GB、10GBなどの大容量4K動画でも、サーバー容量制限や課金なく自由に抽出可能。',
    
    'features.item3Title': 'シングルスレッド WASM 高速処理',
    'features.item3Desc': 'WebAssemblyにコンパイルされたFFmpegにより、安定したハードウェア効率で高速デコードを実現。',
    
    'features.item4Title': 'スタジオ最高品質 (320 kbps)',
    'features.item4Desc': '最高音質320kbpsのMP3/AACや、完全無劣化の16-bit WAV PCM出力を自由に選択可能。',
    
    'features.item5Title': '主要な全動画フォーマットに対応',
    'features.item5Desc': 'MP4、WebM、QuickTime MOV、MKV、AVI、WMV、FLVなどの多彩な動画形式に対応しています。',
    
    'features.item6Title': '即座に使える完全無料仕様',
    'features.item6Desc': '会員登録、アカウント作成、クレジットカード登録、透かしロゴ、順番待ち時間は一切不要です。',

    // How It Works
    'how.badge': 'カンタン3ステップ',
    'how.title': '動画から音声を抽出する方法',
    'how.subtitle': 'ファイルをアップロードすることなく、わずか数ステップで動画を音声に変換できます。',
    'how.step1Title': '1. 動画を選択またはドロップ',
    'how.step1Desc': '変換エリアに動画ファイルをドラッグ＆ドロップするか、クリックしてファイルを選択します。',
    'how.step2Title': '2. フォーマットと音質を選択',
    'how.step2Desc': '希望の音声形式（MP3、WAV、AAC、M4A）と最大320kbpsまでのビットレートを選択します。',
    'how.step3Title': '3. 抽出してダウンロード',
    'how.step3Desc': '「音声を抽出する」をクリックし、内蔵プレイヤーで試聴後、ワンクリックで保存できます。',

    // Format Matrix
    'matrix.badge': '対応フォーマット',
    'matrix.title': '音声フォーマット仕様一覧',
    'matrix.subtitle': '用途に合わせた最適なフォーマットとビットレートの組み合わせをご確認ください。',
    'matrix.colFormat': '形式',
    'matrix.colExtension': '拡張子',
    'matrix.colType': '音声タイプ',
    'matrix.colBitrate': '最大ビットレート',
    'matrix.colBestFor': '最適な用途',
    'matrix.mp3Best': '日常の音楽再生、スマホ、カーオーディオ、ポッドキャスト',
    'matrix.wavBest': '音楽制作、動画編集、マスター音声アーカイブ',
    'matrix.aacBest': '高効率ストリーミング、モバイル端末、最新Web再生',
    'matrix.m4aBest': 'Apple Music、iTunes、iPhone、高音質ボイスメモ',

    // FAQ Section
    'faq.badge': 'よくある質問',
    'faq.title': '気になる疑問にお答えします',
    'faq.subtitle': 'ブラウザ内での動画音声抽出に関する疑問や仕様についての解説です。',
    
    'faq.q1': '動画ファイルはサーバーにアップロードされますか？',
    'faq.a1': 'いいえ、一切アップロードされません。従来の変換ツールと異なり、WebAssembly（FFmpeg.wasm）を用いてお使いのブラウザ内部で100%処理されるため、データが端末外に出ることはありません。',
    
    'faq.q2': 'ファイル容量の制限はありますか？',
    'faq.a2': 'サーバーによる人工的な制限はありません。お使いのパソコンや端末の空きメモリ（RAM）が許す限り、数ギガバイトの大容量動画でも変換可能です。',
    
    'faq.q3': 'どの動画形式に対応していますか？',
    'faq.a3': 'MP4 (.mp4)、WebM (.webm)、QuickTime (.mov)、Matroska (.mkv)、AVI (.avi)、Windows Media (.wmv)、Flash Video (.flv) など、ほぼすべての主要動画形式に対応しています。',
    
    'faq.q4': '設定できる最高音質はどれくらいですか？',
    'faq.a4': 'WAV形式（16-bit PCM 44.1kHz）による完全無劣化のロスレス出力、または320 kbpsの最高ビットレートMP3・AAC出力に対応しています。',
    
    'faq.q5': 'スマートフォンやタブレットでも使えますか？',
    'faq.a5': 'はい！WebAssemblyに対応したモバイルブラウザ（iOS/AndroidのChrome、Safari、Firefox、Edgeなど）であればスマートフォン上でもそのまま利用できます。',
    
    'faq.q6': '利用料金は本当に無料ですか？',
    'faq.a6': 'はい、隠れた課金や利用回数制限、透かし（ウォーターマーク）、メールアドレス登録などは一切なく、完全無料でご利用いただけます。',

    // Footer
    'footer.description': 'WebAssembly搭載の超高速・100%クライアントサイド動画音声抽出ツール。プライバシー、高音質、使いやすさを追求。',
    'footer.privacyNote': 'サーバーテレメトリなし。全データはローカルで処理されます。',
    'footer.allRights': 'All rights reserved.',
    'footer.disclaimer': 'オープンソース FFmpeg WebAssembly テクノロジー採用。'
  }
} as const;
