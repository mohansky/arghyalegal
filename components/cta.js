import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <>
      <div class="wrapper">
        <div class="bottom-block">
          <div class="title">
            <h2>
              These were their terms. <br />
              <span>
                What are yours? 
                <Link href="/contact">
                Let’s discuss
                </Link>
                 
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
