"use client";

import React from "react";
import styles from "./Navbar.module.css";
import { useScroll } from "@/hooks/useScroll";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const isScrolled = useScroll(20);

  return (
    <nav className={cn(styles.nav, isScrolled && styles.scrolled)}>
      <div className={styles.container}>
        <div className={styles.logo}>Zendvo</div>
        <div className={styles.links}>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#community">Community</a>
        </div>
        <div className={styles.actions}>
          <Button variant="outline" size="sm">
            Log In
          </Button>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
