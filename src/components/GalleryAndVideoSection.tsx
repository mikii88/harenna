import React, { useState, useEffect, useRef } from 'react';
import {
  Film,
  Play,
  Eye,
  MapPin,
  Sparkles,
  Clock,
  Download,
  Share2,
  Check,
  ShieldCheck,
  Maximize2,
  Upload,
  ImagePlus,
  X,
  Plus,
  Camera
} from 'lucide-react';
import {
  GalleryItem,
  VideoItem,
  HARENNA_VIDEOS,
  harennaLogo
} from '../data/harennaData';

interface GalleryAndVideoSectionProps {
  galleryItems: GalleryItem[];
  onSelectPhoto: (item: GalleryItem) => void;
  onSelectVideo: (item: VideoItem) => void;
  onOpenDocument?: () => void;
}

export const GalleryAndVideoSection: React.FC<GalleryAndVideoSectionProps> = ({
  galleryItems,
  onSelectPhoto,
  onSelectVideo,
  onOpenDocument
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [customPhotos, setCustomPhotos] = useState<GalleryItem[]>([]);
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState<'landscape' | 'conservation' | 'tourism' | 'community' | 'coffee' | 'honey' | 'biodiversity'>('conservation');
  const [uploadLocation, setUploadLocation] = useState('Harenna Forest & Bale Buffer Zone');
  const [uploadDescription, setUploadDescription] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom user photos from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('harenna_custom_photos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCustomPhotos(parsed);
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved custom photos', e);
    }
  }, []);

  // Save to localStorage when customPhotos change
  const saveCustomPhotos = (items: GalleryItem[]) => {
    setCustomPhotos(items);
    try {
      localStorage.setItem('harenna_custom_photos', JSON.stringify(items));
    } catch (e) {
      console.warn('Failed to save custom photos to localStorage', e);
    }
  };

  const tabs = [
    { id: 'all', label: 'All Media' },
    { id: 'video', label: 'Field Videos' },
    { id: 'conservation', label: 'Soil & Water Trenches' },
    { id: 'landscape', label: 'Cloud Forest & Mountains' },
    { id: 'tourism', label: 'Waterfalls & Eco-Tourism' },
    { id: 'honey', label: 'Forest Honey & Harvest' },
    { id: 'coffee', label: 'Specialty Coffee' },
    { id: 'biodiversity', label: 'Species Discoveries' },
    { id: 'community', label: 'Community & Emblems' }
  ];

  // Combine default gallery items with custom user photos
  const allGalleryItems = [...customPhotos, ...galleryItems];

  // Filter items
  const filteredPhotos = allGalleryItems.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'video') return false; // Handled separately
    return item.category === activeTab;
  });

  const showVideos = activeTab === 'all' || activeTab === 'video' || activeTab === 'honey';

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + '#gallery-and-video');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Use filename as initial title if empty
    if (!uploadTitle) {
      const cleanName = file.name
        .replace(/\.[^/.]+$/, '')
        .replace(/Copy of /g, '')
        .replace(/photo_\d+_/g, 'Field Documentation ')
        .replace(/[_-]/g, ' ');
      setUploadTitle(cleanName);
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setPreviewImage(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!previewImage) return;

    const newPhoto: GalleryItem = {
      id: `custom-${Date.now()}`,
      title: uploadTitle.trim() || 'Uploaded Field Photo',
      category: uploadCategory,
      image: previewImage,
      description: uploadDescription.trim() || 'Direct authentic field photograph uploaded to Harenna Forest Archive.',
      location: uploadLocation.trim() || 'Harenna Forest & Bale Foothills',
      tag: 'Exact Field Upload'
    };

    const updated = [newPhoto, ...customPhotos];
    saveCustomPhotos(updated);

    // Reset form
    setPreviewImage(null);
    setUploadTitle('');
    setUploadDescription('');
    setIsUploadModalOpen(false);
  };

  const handleRemoveCustomPhoto = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = customPhotos.filter((p) => p.id !== id);
    saveCustomPhotos(updated);
  };

  return (
    <section
      id="gallery-and-video"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-50 border-b border-stone-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-xs">
            <Film className="w-3.5 h-3.5 text-emerald-700" />
            <span>Living Visual Archive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-950 tracking-tight">
            Gallery &amp; Video
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Direct visual evidence from Harenna Bulluq: authentic documentary videos of wild honey comb harvesting, active elevated apiaries, specialty shade coffee plots, community soil trenches, and rare mountain species.
          </p>
        </div>

        {/* FEATURED SPOTLIGHT: AUTHENTIC FIELD VIDEOS */}
        <div className="bg-stone-950 rounded-3xl p-6 sm:p-8 text-white border border-stone-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 border-2 border-emerald-400 shrink-0">
                <img
                  src={harennaLogo}
                  alt="Harenna Logo"
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 font-mono">
                  Primary Field Documentation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Featured Documentary Videos
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-700 text-xs font-semibold text-stone-300 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-stone-400" />
                    <span>Share Gallery</span>
                  </>
                )}
              </button>
              {onOpenDocument && (
                <button
                  onClick={onOpenDocument}
                  className="px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-xs font-semibold text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Dossier</span>
                </button>
              )}
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HARENNA_VIDEOS.map((v) => (
              <div
                key={v.id}
                onClick={() => onSelectVideo(v)}
                className="group relative bg-stone-900/90 rounded-2xl overflow-hidden border border-stone-800 hover:border-emerald-500/70 transition-all duration-300 shadow-lg cursor-pointer flex flex-col sm:flex-row"
              >
                {/* Video Reel Preview Frame */}
                <div className="relative sm:w-2/5 h-64 sm:h-auto overflow-hidden bg-black shrink-0">
                  <img
                    src={v.poster}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-600/90 group-hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[10px] font-mono text-white border border-stone-700">
                    {v.duration}
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-700/60">
                    Field Video
                  </div>
                </div>

                {/* Video Info Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="truncate">{v.location}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                      {v.title}
                    </h4>
                    <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                      {v.description}
                    </p>

                    {v.amharicText && (
                      <div className="p-2.5 rounded-xl bg-stone-950/70 border border-stone-800 text-[11px] text-amber-200/90 font-mono italic">
                        "{v.amharicText}"
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Play Field Reel &rarr;
                    </span>
                    <span className="text-[11px] text-stone-400">Recorded on-site</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Navigation Tabs and Upload Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-emerald-900 text-white shadow-md ring-2 ring-emerald-600/30'
                    : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-300'
                }`}
              >
                {tab.label}
                {tab.id === 'video' && (
                  <span className="ml-1.5 px-1.5 py-0.2 bg-emerald-600 text-white text-[10px] rounded-full">
                    2 Videos
                  </span>
                )}
                {tab.id === 'all' && customPhotos.length > 0 && (
                  <span className="ml-1.5 px-1.5 py-0.2 bg-amber-600 text-white text-[10px] rounded-full">
                    +{customPhotos.length} Uploaded
                  </span>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="shrink-0 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-sm hover:shadow inline-flex items-center gap-2 cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Exact Photo</span>
          </button>
        </div>

        {/* Grid of Videos + Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render Videos First if ActiveTab is 'all' or 'video' */}
          {showVideos &&
            HARENNA_VIDEOS.map((v) => (
              <div
                key={`grid-${v.id}`}
                onClick={() => onSelectVideo(v)}
                className="bg-stone-900 text-white rounded-2xl border border-stone-800 hover:border-emerald-500 overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer flex flex-col"
              >
                <div className="relative h-60 overflow-hidden bg-black">
                  <img
                    src={v.poster}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-emerald-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-emerald-300 border border-emerald-600 flex items-center gap-1">
                    <Film className="w-3 h-3" />
                    <span>FIELD VIDEO ({v.duration})</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-stone-300 border border-stone-700">
                    Click to Play
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="truncate">{v.location}</span>
                    </div>
                    <h3 className="font-bold font-display text-white text-base group-hover:text-emerald-300 transition-colors line-clamp-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                      {v.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                    <span className="text-emerald-400 font-semibold group-hover:underline">
                      Watch Video Reel &rarr;
                    </span>
                    <span className="text-[11px] font-mono">{v.duration}</span>
                  </div>
                </div>
              </div>
            ))}

          {/* Render Filtered Photographs */}
          {activeTab !== 'video' &&
            filteredPhotos.map((item) => {
              const isCustom = item.id.startsWith('custom-');
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectPhoto(item)}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all group cursor-pointer flex flex-col relative"
                >
                  <div className="relative h-60 overflow-hidden bg-stone-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-stone-950/75 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-stone-200 border border-stone-700/60 flex items-center gap-1">
                      {item.tag}
                    </div>
                    {isCustom && (
                      <button
                        onClick={(e) => handleRemoveCustomPhoto(item.id, e)}
                        title="Remove uploaded photo"
                        className="absolute top-3 left-3 p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 cursor-pointer shadow-md"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-100">
                        <Maximize2 className="w-5 h-5 text-emerald-800" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs text-stone-500">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="truncate">{item.location}</span>
                      </div>
                      <h3 className="font-bold font-display text-stone-900 text-base group-hover:text-emerald-800 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                      <span className="text-emerald-700 font-semibold group-hover:underline">
                        Inspect High-Res &rarr;
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Modal: Upload Exact Field Photo */}
        {isUploadModalOpen && (
          <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setIsUploadModalOpen(false);
                  setPreviewImage(null);
                }}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-stone-950">
                    Add Exact Field Photo
                  </h3>
                  <p className="text-xs text-stone-500">
                    Directly upload original photographs from your phone or camera
                  </p>
                </div>
              </div>

              <form onSubmit={handleAddPhotoSubmit} className="space-y-4">
                {/* File Drop / Select Area */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Select Image File
                  </label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  {previewImage ? (
                    <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 bg-stone-100 group">
                      <img
                        src={previewImage}
                        alt="Upload preview"
                        className="w-full h-48 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-3 py-1.5 rounded-lg bg-white text-stone-900 text-xs font-bold shadow-sm"
                        >
                          Change Photo
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-stone-300 hover:border-emerald-500 rounded-2xl p-6 text-center bg-stone-50 hover:bg-emerald-50/50 transition-colors cursor-pointer space-y-2"
                    >
                      <ImagePlus className="w-8 h-8 text-stone-400 mx-auto" />
                      <div className="text-xs text-stone-700 font-medium">
                        Click to select photo or drag and drop
                      </div>
                      <div className="text-[11px] text-stone-400">
                        Supports JPG, PNG, WEBP from mobile or desktop
                      </div>
                    </div>
                  )}
                </div>

                {/* Title */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Photo Title
                  </label>
                  <input
                    type="text"
                    required
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="e.g. Hillside Soil & Water Conservation Terracing"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                </div>

                {/* Category & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Category
                    </label>
                    <select
                      value={uploadCategory}
                      onChange={(e) => setUploadCategory(e.target.value as any)}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none bg-white"
                    >
                      <option value="conservation">Soil &amp; Water Trenches</option>
                      <option value="landscape">Cloud Forest &amp; Mountains</option>
                      <option value="tourism">Waterfalls &amp; Eco-Tourism</option>
                      <option value="community">Community &amp; Emblems</option>
                      <option value="honey">Forest Honey &amp; Harvest</option>
                      <option value="coffee">Specialty Coffee</option>
                      <option value="biodiversity">Species Discoveries</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Location Tag
                    </label>
                    <input
                      type="text"
                      value={uploadLocation}
                      onChange={(e) => setUploadLocation(e.target.value)}
                      placeholder="e.g. Ebro Foothills or Harenna Escarpment"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Caption / Field Description
                  </label>
                  <textarea
                    rows={2}
                    value={uploadDescription}
                    onChange={(e) => setUploadDescription(e.target.value)}
                    placeholder="Brief description of the field observation, project site, or community action..."
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsUploadModalOpen(false);
                      setPreviewImage(null);
                    }}
                    className="px-4 py-2 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!previewImage}
                    className="px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 disabled:bg-stone-300 text-white text-xs font-bold transition-all shadow-sm cursor-pointer disabled:cursor-not-allowed flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Save to Archive</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
