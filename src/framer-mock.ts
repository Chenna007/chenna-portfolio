import * as React from 'react';
import * as motion from 'framer-motion';

export const useIsStaticRenderer = () => false;
export const useOnVariantChange = (callback: any) => {};
export const useAnimationControls = motion.useAnimation;
export const useIsomorphicLayoutEffect = React.useLayoutEffect;
export const useLayoutEffect = React.useLayoutEffect;
export const useStore = (initial: any) => [initial, () => {}];
export const useCallback = React.useCallback;
export const useMemo = React.useMemo;
export const useRef = React.useRef;
export const useState = React.useState;
export const useEffect = React.useEffect;
export const useContext = React.useContext;
export const useId = React.useId;
export const useImperativeHandle = React.useImperativeHandle;
export const useInsertionEffect = React.useInsertionEffect;
export const useDebugValue = React.useDebugValue;
export const useDeferredValue = React.useDeferredValue;
export const useTransition = React.useTransition;
export const useSyncExternalStore = React.useSyncExternalStore;

// Explicitly export motion hooks
export const useAnimation = motion.useAnimation;
export const useAnimate = motion.useAnimate;
export const useCycle = motion.useCycle;
export const useTransform = motion.useTransform;
export const useSpring = motion.useSpring;
export const useMotionValue = motion.useMotionValue;
export const useScroll = motion.useScroll;
export const useTime = motion.useTime;
export const useVelocity = motion.useVelocity;
export const useReducedMotion = motion.useReducedMotion;
export const useDragControls = motion.useDragControls;
export const useInView = motion.useInView;
export const usePresence = motion.usePresence;
export const useIsPresent = motion.useIsPresent;
export const useMotionTemplate = motion.useMotionTemplate;
export const useMotionValueEvent = motion.useMotionValueEvent;

// Re-export everything from framer-motion
export * from 'framer-motion';

// Mock Framer components
export const Image = (props: any) => React.createElement('img', { ...props, referrerPolicy: 'no-referrer' });
export const Frame = (props: any) => React.createElement('div', props);
export const Stack = (props: any) => React.createElement('div', { ...props, style: { display: 'flex', flexDirection: 'column', ...props.style } });
export const RichText = (props: any) => React.createElement('div', props);
export const Component = (props: any) => React.createElement('div', props);

// Mock Navigation and History
export const Navigation = {
    push: () => {},
    replace: () => {},
    goBack: () => {},
};

export const History = {
    push: () => {},
    replace: () => {},
    goBack: () => {},
};

export const useNavigation = () => Navigation;
export const useNavigate = () => Navigation;
export const useHistory = () => History;
export const useLocation = () => ({ pathname: "/", search: "", hash: "", state: null });

// Mock Router
export const Router = {
    push: () => {},
    replace: () => {},
    goBack: () => {},
};
export const useRouter = () => Router;

// Add other common Framer exports
export const addPropertyControls = () => {};
export const addFonts = () => {};
export const withCSS = (Component: any) => Component;
export const withFX = (Component: any) => Component;
export const withHOC = (Component: any) => Component;
export const cx = (...args: any[]) => args.filter(Boolean).join(' ');
export const getLoadingLazyAtYPosition = () => 0;
export const useInvertedScale = () => ({ scaleX: 1, scaleY: 1 });
export const useActiveVariantCallback = (variant: string, callback: any) => callback;
export const useVariantState = (initial: any) => [initial, () => {}];
export const useOverlayState = () => ({ isOpen: false, open: () => {}, close: () => {}, toggle: () => {} });
export const useOverlay = () => ({ isOpen: false, open: () => {}, close: () => {}, toggle: () => {} });
export const useComponentViewport = () => ({ width: 1200, height: 800 });
export const useViewport = () => ({ width: 1200, height: 800 });
export const useLocaleInfo = () => ({ locale: "en-US", currency: "USD" });
export const useLocale = () => "en-US";
export const useLink = () => ({ push: () => {}, replace: () => {} });
export const useAction = () => ({ push: () => {}, replace: () => {} });
export const useIsMobile = () => false;
export const useMeasure = () => [() => {}, { width: 1200, height: 800 }];
export const Data = (initial: any) => initial;
export const animate = motion.animate;
export const RenderTarget = {
    current: "canvas",
    canvas: "canvas",
    preview: "preview",
    export: "export",
};
export const ControlType = {
    Number: "number",
    String: "string",
    Boolean: "boolean",
    Enum: "enum",
    Color: "color",
    Image: "image",
    File: "file",
    ComponentInstance: "componentinstance",
    Array: "array",
    Object: "object",
};

const mock = {
    useIsStaticRenderer,
    useOnVariantChange,
    useAnimationControls,
    useIsomorphicLayoutEffect,
    useLayoutEffect,
    useStore,
    useCallback,
    useMemo,
    useRef,
    useState,
    useEffect,
    useContext,
    useId,
    useImperativeHandle,
    useInsertionEffect,
    useDebugValue,
    useDeferredValue,
    useTransition,
    useSyncExternalStore,
    useAnimation,
    useAnimate,
    useCycle,
    useTransform,
    useSpring,
    useMotionValue,
    useScroll,
    useTime,
    useVelocity,
    useReducedMotion,
    useDragControls,
    useInView,
    usePresence,
    useIsPresent,
    useMotionTemplate,
    useMotionValueEvent,
    addPropertyControls,
    addFonts,
    withCSS,
    withFX,
    withHOC,
    cx,
    getLoadingLazyAtYPosition,
    useInvertedScale,
    useActiveVariantCallback,
    useVariantState,
    useOverlayState,
    useOverlay,
    useComponentViewport,
    useViewport,
    useLocaleInfo,
    useLocale,
    useLink,
    useAction,
    useIsMobile,
    useMeasure,
    Data,
    animate,
    useDomEvent: (motion as any).useDomEvent || (() => {}),
    RenderTarget,
    ControlType,
    Image,
    Frame,
    Stack,
    RichText,
    Component,
    Navigation,
    History,
    useNavigation,
    useNavigate,
    useHistory,
    useLocation,
    Router,
    useRouter,
    ...motion
};

export default mock;
